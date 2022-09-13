import { useEffect } from 'react';
import { useState } from 'react';
import { searchUserApi } from '../api/searchUsersApi';

export const useSearchUser = () => {
	const [searchUser, setSearchUser] = useState({
		user: {},
		loading: false,
		error: undefined,
		search: ''
	});

	const startSearch = () => {
		setSearchUser({
			...searchUser,
			loading: true,
			error: undefined
		});
	};

	const setSucess = user => {
		setSearchUser({
			...searchUser,
			user,
			loading: false,
			error: undefined
		});
	};

	const setError = error => {
		setSearchUser({
			...searchUser,
			error,
			loading: false
		});
	};

	const setSearch = search => {
		setSearchUser({
			...searchUser,
			search
		});
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			getUser(searchUser.search, startSearch, setSucess, setError);
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, [searchUser.search]);

	const getUser = async (search, startSearch, setSucess, setError) => {
		startSearch();
		const { success, data, error } = await searchUserApi(search);
		if (success) {
			setSucess(data);
		} else {
			setError(error);
		}
	};

	return {
		...searchUser,
		setSearch
	};
};
