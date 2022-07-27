import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component {

	render() {
		if (!this.props.user) {
			return null;
		}

		return(
			<div>
				<h4 className="userHeader">
					{this.props.user.name}
				</h4>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {user: state.users.find(user => user.id === ownProps.userId)}
};

export default connect(mapStateToProps)(UserHeader);