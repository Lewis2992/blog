import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPost = () => {

	return async function (dispatch, getState) {
		const response = await jsonPlaceholder.get('./posts');

		return dispatch({type: 'FETCH_POSTS', payload: response.data});
	};
};

export const fetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`./users/${id}`);

	return dispatch({type: 'FETCH_USER', payload: response.data});
};