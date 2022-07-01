import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Footer from "../../cms/pages/Footer";
import Navbar from "../welcome/navbar/Navbar";
import SocialModal from "./SocialModal";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Social() {
	return (
		<div className='w-full h-full bg-gray-900'>
			<div className="relative mx-auto overflow-hidden max-w-7xl">
				<Navbar/>
				<main className="mt-14">
				<div className="flex items-center justify-between px-5 pt-6 pb-8 space-y-2 md:space-y-5 font-exo">
					<div>
						<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Social</h1>
						<p className="mt-2 text-lg leading-7 text-gray-200">Latest CompensationVR images</p>
					</div>
				</div>
				<SocialFeed/>
				<Footer/>
				</main>
			</div>
		</div>
	);
}

function SocialFeed() {
	const [images, setImages] = useState([]);
	const [offset, setOffset] = useState(0);
	const [modal, setModal] = useState(<></>);
	
	useEffect(() => {
		fetch(`https://api.compensationvr.tk/api/social/imgfeed?count=20&reverse=true&offset=${offset}`).then(async response => {
			const data = await response.json();
			setImages(data);
		})
	}, []);

	function fetchMoreImages() {
		setOffset(offset + 20);
		console.log(offset);
		fetch(`https://api.compensationvr.tk/api/social/imgfeed?count=20&reverse=true&offset=${offset + 20}`).then(async response => {
			const data = await response.json();
			setImages(images.concat(data));
		})	
	}
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
					<InfiniteScroll
						dataLength={images.length}
						next={fetchMoreImages}
						hasMore={true}
						loader={<h4>Loading...</h4>}
					>
						<div className="flex flex-wrap -m-4">
							{images.map(image =>
								<SocialImage
								key={image._id}
								image={image.filePath}
								tags={image.social.tags}
								author={image.takenBy.nickname}
								time={image.takenOn.humanReadable}
								room={image.room.name}
								clickAction={() => setModal(<SocialModal image={`https://api.compensationvr.tk${image.filePath}`} actionOnClose={() => setModal(<></>)}/>)}
								/>
							)}
						</div>
					</InfiniteScroll>
			</div>
			{modal}
		</section>
	);
}

function SocialImage(props) {
	const [isLoaded, setIsLoaded] = useState(false);
	
	return (
		<div className="p-4 lg:w-1/3 sm:w-1/2">
			<div className="relative flex">
				<div className={"absolute inset-0 object-cover object-center w-full h-full flex items-center justify-center bg-gray-400 rounded-md" + (isLoaded ? " hidden" : "")} >
					<svg role="status" className="w-8 h-8 mr-2 text-gray-600 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
					</svg>
				</div>
				<img alt="gallery" className={"absolute inset-0 object-cover object-center w-full h-full rounded-md" + (isLoaded ? "" : " hidden")} 
				src={`https://api.compensationvr.tk${props.image}`}
				onLoad={() => {
					setIsLoaded(true);
				}}
				/>
				<div onClick={props.clickAction} className="relative z-10 w-full px-8 py-10 bg-gray-800 border-4 border-gray-200 rounded-md opacity-0 font-exo hover:opacity-100">
					<h2 className="mb-1 text-sm font-medium tracking-widest text-gray-100 title-font">ROOM &quot;{props.room}&quot;</h2>
					<h1 className="mb-3 text-lg font-medium text-gray-100 title-font">Taken by {props.author}</h1>
					<span className="inline-flex items-center px-3 py-0.5 mb-2 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
						{props.time}
					</span>
					<div className="space-x-3">{props.tags.map(tag => 
						<span key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
							{tag}
					  	</span>
					)}</div>
				</div>
			</div>
		</div>
	);
}

SocialImage.propTypes = {
	image: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	author: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	room: PropTypes.string.isRequired,
	clickAction: PropTypes.func.isRequired,
};
