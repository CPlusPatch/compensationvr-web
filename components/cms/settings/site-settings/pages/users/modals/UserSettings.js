import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { ChevronExpand, Check } from 'react-bootstrap-icons';

const roles = [
	{ id: "admin", name: 'Administrator' },
	{ id: "user", name: 'Standard user' },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function UserSettingsModal(props) {
	let [isOpen, setIsOpen] = useState(true)

	function closeModal() {
	  setIsOpen(false)
	  props.onClose();
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
					User settings
				  </Dialog.Title>
				  <div className="flex justify-between w-full mt-2 align-center">
					<RoleSelect/>
				  </div>
				  <div className="w-full mt-2 align-center">
					<p className="flex items-center text-sm font-medium leading-6 text-gray-700">Description</p>
					
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

  
function RoleSelect() {
	const [selected, setSelected] = useState(roles[0])
  
	return (
	  <Listbox value={selected} onChange={setSelected}>
		{({ open }) => (
		  <>
			<Listbox.Label className="block my-auto text-sm font-medium text-gray-700">User privileges</Listbox.Label>
			<div className="relative mt-1">
			  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
				<span className="block truncate">{selected.name}</span>
				<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				  <ChevronExpand className="w-5 h-5 text-gray-400" aria-hidden="true" />
				</span>
			  </Listbox.Button>
  
			  <Transition
				show={open}
				as={Fragment}
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			  >
				<Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
				  {roles.map((person) => (
					<Listbox.Option
					  key={person.id}
					  className={({ active }) =>
						classNames(
						  active ? 'text-white bg-indigo-600' : 'text-gray-900',
						  'cursor-default select-none relative py-2 pl-3 pr-9'
						)
					  }
					  value={person}
					>
					  {({ selected, active }) => (
						<>
						  <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
							{person.name}
						  </span>
  
						  {selected ? (
							<span
							  className={classNames(
								active ? 'text-white' : 'text-indigo-600',
								'absolute inset-y-0 right-0 flex items-center pr-4'
							  )}
							>
							  <Check className="w-5 h-5" aria-hidden="true" />
							</span>
						  ) : null}
						</>
					  )}
					</Listbox.Option>
				  ))}
				</Listbox.Options>
			  </Transition>
			</div>
		  </>
		)}
	  </Listbox>
	)
  }

UserSettingsModal.propTypes = {
	onClose: PropTypes.func.isRequired,
}

export default UserSettingsModal;