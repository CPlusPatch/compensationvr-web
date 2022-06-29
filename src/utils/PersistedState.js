import React, { useState, useEffect } from "react";

/* const getUs = (key, defaultValue) => {
	const state = () => JSON.parse(localStorage.getItem(key)) || defaultValue
	const setState = () => localStorage.setItem(key, JSON.stringify(state));
	return [state, setState];
};
 */
export default {
	getState: (key, defaultValue) => {
		return JSON.parse(localStorage.getItem(key)) || defaultValue
	},
	setState: (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	}
}