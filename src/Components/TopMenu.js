import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoSrc from 'assets/logo.png';

const Container = styled.div`
	width: 100vw;
	position: fixed;
	left: 0;
	z-index: 10;
	padding: 20px 30px;
	visibility: ${props => (!props.visible ? 'visible' : 'hidden')};
	display: flex;
	align-items: center;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const Menu = styled(FontAwesomeIcon)`
	margin-right: 12px;
	&:hover {
		cursor: pointer;
	}
`;

const LogoImg = styled.img.attrs({
	src: `${LogoSrc}`,
})`
	width: 50px;
`;

const TopMenu = ({ visible, handleMouseDown }) => (
	<Container visible={visible}>
		<Menu icon={faBars} onMouseDown={handleMouseDown} />
		<Link to="/">
			<LogoImg />
		</Link>
	</Container>
);

export default TopMenu;
