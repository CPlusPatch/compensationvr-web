import React from "react";
import Breadcrumbs from "./site-settings/Breadcrumbs";
import Navbar from "./site-settings/Navbar";
import Sidebar from "./site-settings/Sidebar";

export default function SiteSettings() {
  return (
	<>
		<Navbar/>
		<div className="py-6 mx-auto max-w-7xl">
			<Breadcrumbs/>
			<Sidebar/>
		</div>
	</>
  )
}