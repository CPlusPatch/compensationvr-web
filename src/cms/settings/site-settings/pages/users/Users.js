import React, { Suspense, useEffect, useState } from "react";
import firebase from "../../../../../utils/firebase";
import UserSettingsModal from "./modals/UserSettings";
  
export default function Users() {
	const [users, setUsers] = useState([]);
	const [userSettingsModal, setUserSettingsModal] = useState(<></>);

	useEffect(() => {
		async function getUsers() {
			const users = await firebase.getUsers();
			setUsers(users);
		}
		getUsers();
	}, []);
	return (
		<>
			<Heading/>
			<div className="flex flex-col mt-3">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
							<th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Name
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Role
							</th>
							<th scope="col" className="relative px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{
							JSON.stringify(users) === "[]" ?
							<tr>
								<td className="px-6 py-4 whitespace-nowrap animate-pulse">
								<div className="flex items-center">
									<div className="flex-shrink-0 w-10 h-10">
									<div className="w-10 h-10 bg-gray-300 rounded-full"></div>
									</div>
									<div className="ml-4">
									<div className="h-4 mb-1 bg-gray-300 rounded-md w-36"></div>
									<div className="w-40 h-4 bg-gray-300 rounded-md"></div>
									</div>
								</div>
								</td>
								<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"><div className="w-24 h-6 bg-gray-300 rounded-md"></div></td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
								<a href="#" className="text-indigo-600 hover:text-indigo-900"></a>
								</td>
							</tr>
							:
							users.map((user) => (
							<tr key={user.email}>
								<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="flex-shrink-0 w-10 h-10">
									<img className="w-10 h-10 rounded-full" src={user.avatar} alt="" />
									</div>
									<div className="ml-4">
									<div className="text-sm font-medium text-gray-900">{user.name}</div>
									<div className="text-sm text-gray-500">{user.email}</div>
									</div>
								</div>
								</td>
								<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.role}</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
								<button onClick={() => {
									setUserSettingsModal(
										<UserSettingsModal onClose={() => {setUserSettingsModal(<></>)}}/>
									)
								}} className="text-indigo-600 hover:text-indigo-900">
									Edit
								</button>
								</td>
							</tr>
							)) }
						</tbody>
						</table>
					</div>
					</div>
				</div>
			</div>
			{userSettingsModal}
		</>
	)
}

function Heading() {
	return (
	  <div className="md:flex md:items-center md:justify-between">
		<div className="flex-1 min-w-0">
		  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Users</h2>
		</div>
		<div className="flex mt-4 md:mt-0 md:ml-4">
		  <button
			type="button"
			className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
			Add
		  </button>
		  <button
			type="button"
			className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		  >
			Publish
		  </button>
		</div>
	  </div>
	)
  }