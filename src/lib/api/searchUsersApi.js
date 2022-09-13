export const searchUserApi = async search => {
	try {
		const res = await fetch(
			`https://api.github.com/users/${search || 'octocat'}`
		);

		if (res.ok) {
			const data = await res.json();
			return {
				success: true,
				data,
				error: undefined
			};
		} else {
			return {
				success: false,
				data: undefined,
				error: res.status
			};
		}
	} catch (error) {
		return {
			success: false,
			data: undefined,
			error
		};
	}
};
