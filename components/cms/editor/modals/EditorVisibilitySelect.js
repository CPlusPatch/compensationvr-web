import React, { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import PropType from "prop-types";

const visibilities = [
  { type: "public", text: "Public" },
  { type: "restricted", text: "Restricted" },
  { type: "private", text: "Private" },
]

function EditorVisibilitySelect(props) {
	const [selected, setSelected] = useState(visibilities[0]);
	useEffect(() => {
		switch (props.defaultVisibility) {
			case "public":
				setSelected(visibilities[0])
				break;
			case "restricted":
				setSelected(visibilities[1])
				break;
			case "private":
				setSelected(visibilities[2])
		}
	}, []);

  return (
      <Listbox value={selected} onChange={(values) => {setSelected(values); props.onchange(values)}}>
        <div className="relative mt-1">
          <Listbox.Button className="relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default w-52 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.text}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
			enter="transition ease-out duration-100"
			enterFrom='opacity-0 scale-95'
			enterTo='opacity-100 scale-100'
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Listbox.Options className="absolute z-50 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {visibilities.map((visibility, visibilityIdx) => (
                <Listbox.Option
                  key={visibilityIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                    }`
                  }
                  value={visibility}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {visibility.text}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  )
}

EditorVisibilitySelect.propTypes = {
	onchange: PropType.func.isRequired,
	defaultVisibility: PropType.string.isRequired,
}


export default EditorVisibilitySelect;