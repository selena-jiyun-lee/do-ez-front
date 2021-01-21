import React from 'react';
import styled from 'styled-components';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoSrc from 'assets/logo.png';

const LeftContainer = styled.div`
	width: 100vw;
	height: 100%;
	position: fixed;
	left: 0;
	z-index: 99;
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 30px 40px;
	background-color: #9999cc;
	transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
	transform: ${props => (!props.visible ? 'translate3d(-100vw, 0, 0)' : 'translate3d(0vw, 0, 0);')};
`;

const Logo = styled.div`
	margin-bottom: 60px;
`;

const LogoImg = styled.img.attrs({
	src: `${LogoSrc}`,
})`
	width: 100px;
`;

// Search Container
const Search = styled.div`
	width: 30%;
	min-width: 300px;
	position: relative;
	margin-bottom: 20px;
	background-color: #ffffff;
	border-radius: 20px;
	color: #9999cc;
`;

// Search Input
const SearchInput = styled.input`
	width: 90%;
	padding: 8px 15px;
`;

// Search Icon
const SearchIcon = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 7px;
`;

// Menu Container
const Types = styled.ul`
	width: 30%;
	min-width: 300px;
	margin: 0;
	padding: 0;
	list-style: none;
	color: rgba(256, 256, 256, 0.9);
`;

// Large Menu
const TypeGroup = styled.li`
	margin-bottom: 50px;
`;

// Large menu name
const TypeName = styled.div`
	padding: 10px;
	border-bottom: 1px solid rgba(256, 256, 256, 0.3);
	font-weight: 400;
	font-size: 1.5rem;
`;
// Small menu list
const TypeItems = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

// Small menu item
const TypeItem = styled.li`
	padding: 10px;
	border-bottom: 1px solid #9999cc;
	font-size: 1.2rem;
`;

// Temporary data before link DB
const temp_data = [
	{ id: '1', name: 'development', items: ['javascript', 'python'] },
	{ id: '2', name: 'TIL', items: ['English', 'Development'] },
];
// id: id, name: Large menu name, items: [small menu name, small menu name]

const LeftMenu = ({ visible, handleMouseDown, handleInput }) => (
	<LeftContainer visible={visible} onMouseDown={handleMouseDown}>
		<Logo>
			<LogoImg />
		</Logo>
		<Search>
			<SearchInput onClick={handleInput} />
			<SearchIcon icon={faSearch} />
		</Search>
		<Types>
			{temp_data.map(type => (
				<TypeGroup key={type.id}>
					<TypeName>{type.name}</TypeName>
					<TypeItems>
						{type.items.map(item => (
							<TypeItem key={item}> - {item} </TypeItem>
						))}
					</TypeItems>
				</TypeGroup>
			))}
		</Types>
	</LeftContainer>
);

export default LeftMenu;

// Set PropTypes
