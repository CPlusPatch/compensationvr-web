import React, { useState } from "react";
import Sidebar from "./site-settings/Sidebar";
import Navbar from "../../vendor/welcome/navbar/Navbar";
import Users from "./site-settings/pages/users/Users";
  
export default function Dashboard() {
	return (
		<div className='h-full bg-gray-900'>
			<div className="relative mx-auto overflow-hidden max-w-7xl">
				<Navbar/>
				<main className="pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
						<Sidebar />
						<div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
							<Users/>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
  }