/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import LeftMenu from 'Components/LeftMenu';
import TopMenu from 'Components/TopMenu';

class Header extends React.Component {
	constructor(props, context) {
		super(props, context);
		// Default: TopMenu=visible, LeftMenu=hidden
		this.state = {
			visible: false,
		};

		this.handleMouseDown = this.handleMouseDown.bind(this);
	}

	// TopMenu - bar button, LeftMenu - div Event
	handleMouseDown(event) {
		event.stopPropagation();
		const { visible } = this.state;
		const {
			target: { tagName },
		} = event;

		if (!(tagName === 'INPUT')) {
			this.setState({
				visible: !visible,
			});
		}
	}

	handleInput(event) {
		// For search
	}

	render() {
		const { visible } = this.state;
		return (
			<>
				<LeftMenu
					visible={visible}
					handleMouseDown={this.handleMouseDown}
					handleInput={this.handleInput}
				/>
				<TopMenu visible={visible} handleMouseDown={this.handleMouseDown} />
			</>
		);
	}
}
export default Header;

// Set PropTypes
