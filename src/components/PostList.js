import React from 'react';
import {connect} from 'react-redux';

import {fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderPostList() {
		return this.props.posts.map(post => {
			return (
				<div key={post.id} className="post">
					<div >
						<h3 className="post__title">
							{post.title}
						</h3>
						<p className="post__text">
							{post.body}
						</p>
					</div>
					<UserHeader userId={post.userId}/>
				</div>
			);
		})
	}

	render() {
		return (
			<div className="postList">
				{this.renderPostList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {posts: state.posts};
};

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);