import React, { Fragment, useState } from 'react';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import EditorVisibilitySelect from './EditorVisibilitySelect';
import PropType from "prop-types";
import EditorDescriptionField from './EditorDescriptionField';

function EditorSettingsModal(props) {
	let [isOpen, setIsOpen] = useState(true)

	function closeModal() {
	  setIsOpen(false)
	}
  
	function openModal() {
	  setIsOpen(true)
	}
	
	if (!isOpen) {
		return null;
	}
	return (
	  <>
		<Transition appear show={isOpen} as={Fragment}>
		  <Dialog
			as="div"
			className="fixed inset-0 z-50 overflow-y-auto bg-black/80"
			onClose={closeModal}
		  >
			<div className="min-h-screen px-4 text-center">
			  <Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			  >
				<Dialog.Overlay className="fixed inset-0" />
			  </Transition.Child>
  
			  {/* This element is to trick the browser into centering the modal contents. */}
			  <span
				className="inline-block h-screen align-middle"
				aria-hidden="true"
			  >
				&#8203;
			  </span>
			  <Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				enterTo="opacity-100 translate-y-0 sm:scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 translate-y-0 sm:scale-100"
				leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			  >
				<div className="inline-block w-full p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl md:w-2/3 lg:w-1/3 rounded-2xl">
				  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
					Post settings
				  </Dialog.Title>
				  <div className="flex justify-between w-full mt-2 align-center">
					<p className="flex items-center text-sm font-medium leading-6 text-gray-700">Post visibility</p>
					<EditorVisibilitySelect onchange={props.onVisibilityChange} defaultVisibility={props.visibility}/>
				  </div>
				  <div className="w-full mt-2 align-center">
					<p className="flex items-center text-sm font-medium leading-6 text-gray-700">Description</p>
					<EditorDescriptionField onchange={props.onDescriptionChange} defaultDescription={props.description}/>
				  </div>
  
				  <div className="flex mt-4">
					<button
					  type="button"
					  className="inline-flex justify-center px-4 py-2 ml-auto text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
					  onClick={closeModal}
					>
					  Close
					</button>
				  </div>
				</div>
			  </Transition.Child>
			</div>
		  </Dialog>
		</Transition>
	  </>
	)
}

EditorSettingsModal.propTypes = {
	onVisibilityChange: PropType.func.isRequired,
	onDescriptionChange: PropType.func.isRequired,
	visibility: PropType.string.isRequired,
	description: PropType.string.isRequired
}

export default EditorSettingsModal;