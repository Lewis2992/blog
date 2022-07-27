import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
	return async (dispatch, getState) => {
		await dispatch(fetchPosts());

		const userIds = new Set(getState().posts.map(post => post.userId));
		// console.log(userIds);
		userIds.forEach(userId => dispatch(fetchUsers(userId)));
	};
};

export const fetchPosts = () => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get('/posts');

		return dispatch({
			type: 'FETCH_POSTS',
			payload: response.data
		});
	};
};

export const fetchUsers = (userId) => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get(`/users/${userId}`);
		return dispatch({
			type: 'FETCH_USERS',
			payload: response.data
		});
	};
};