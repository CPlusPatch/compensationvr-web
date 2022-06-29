import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { PlusSmIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center mr-2 -ml-2 md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center flex-shrink-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" overflow="hidden" className="block w-8 h-8">
						<defs id="_ahicTeclJLXvrGDvXlvWD"
							transform="matrix(0.9207033031013849, 0, 0, 0.9207033031013849, -13.247024509484397, 125.25114480431304)">
						</defs>
						<g id="_ttsiO5aWgfgI9dScdb90H"
							transform="matrix(3.4377660751342773, 0, 0, 3.4377660751342773, 70.50003879390005, -586.0355089013633)">
							<path id="_iK8zcPzmv90arHuJ8dHp_" fill="#1761a0"
								transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.820785522460938, 177.78671264648438)"
								data-type="polygon"
								d="M36.703 11.011L9.638 26.636L9.638 38.757L36.703 23.131L63.767 38.757L63.767 26.636Z"></path>
							<path id="_EvdYjmwpEee_oLcoDMbJs" fill="#4c96d7"
								transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.28351879119873, 178.66650390625)"
								data-type="polygon"
								d="M63.298 89.092L36.233 73.467L36.233 61.348L63.298 76.973L90.362 61.348L90.362 73.467Z"></path>
							<path id="_ENK-PmC0r9u6aLgbi6Pg1" fill="#4c96d7"
								transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.15572738647461, 177.95213317871094)"
								data-type="polygon"
								d="M9.638 42.012L36.703 26.386L47.198 32.446L20.134 48.072L20.134 79.324L9.638 73.264Z"></path>
							<path id="_L_yBvBmPCbNMW5_dWLtFZ" fill="#4c96d7"
								transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.002666473388672, 178.13897705078125)"
								data-type="polygon"
								d="M77.083 18.872L50.018 3.247L39.522 9.307L66.586 24.932L66.586 56.184L77.083 50.124Z"></path>
							<path id="_mUjvX9AtBAUEBoPN452LJ" fill="#1761a0"
								transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.651481628417969, 178.71014404296875)"
								data-type="polygon"
								d="M23.01 81.127L23.011 49.876L33.507 43.816L33.507 75.068L60.571 90.693L50.075 96.754Z"></path>
							<path id="_EQDmN8FyYEsJVmeMaMdzQ" fill="#1761a0"
								transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.375923156738281, 178.7588348388672)"
								data-type="polygon"
								d="M90.362 58.092L90.362 26.84L79.866 20.78L79.866 52.031L52.802 67.658L63.298 73.719Z"></path>
						</g>
					</svg>
					<h3 className="hidden text-lg font-bold lg:block">CPlusPatch</h3>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500">
                    Landing
                  </a>
                  <a href="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
                    Blog
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PlusSmIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
                    <span>New post</span>
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <button
                    type="button"
                    className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50 sm:pl-5 sm:pr-6"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}