import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'

export default function Modal(props) {
	const [open, setOpen] = useState(true);
  
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={()=> props.actionOnClose()}>
				<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
						leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
						<Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
					</Transition.Child>

					<Transition.Child as={Fragment} enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
						<div className="inline-block m-5 overflow-hidden align-bottom transition-all transform bg-gray-800 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-4xl">
							<div className="absolute top-0 right-0 block pt-4 pr-4">
								<button type="button"
									className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									onClick={()=> props.actionOnClose()}
									>
									<span className="sr-only">Close</span>
									<XIcon className="w-6 h-6" aria-hidden="true" />
								</button>
							</div>
							<div className="sm:flex sm:items-start">
									<img src={props.image}/>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

Modal.propTypes = {
	image: PropTypes.string.isRequired,
	actionOnClose: PropTypes.func.isRequired,
}