import React from 'react';
import styled from 'styled-components';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoSrc from 'assets/logo.png';

const Container = styled.div`
	width: 300px;
	height: 100%;
	position: fixed;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 60px;
	background-color: #9999cc;
`;

const Logo = styled.img.attrs({
	src: `${LogoSrc}`,
})`
	width: 100px;
	margin-bottom: 100px;
`;

// Search Container
const Search = styled.div`
	width: 100%;
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
	border: none;
	background-color: transparent;
	color: #666699;
	font-size: 0.8rem;

	&:focus {
		outline: none;
	}
`;

// Search Icon
const SearchIcon = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 10px;
`;

// Menu Container
const Types = styled.ul`
	width: 100%;
	color: rgba(256, 256, 256, 0.9);
`;

// Large Menu
const TypeGroup = styled.li`
	margin-bottom: 10px;
`;

// Large menu name
const TypeName = styled.div`
	padding: 10px;
	border-bottom: 1px solid rgba(256, 256, 256, 0.3);
	font-weight: 400;
	font-size: 1.1rem;
`;
// Small menu list
const TypeItems = styled.ul``;

// Small menu item
const TypeItem = styled.li`
	padding: 10px;
	border-bottom: 1px solid #9999cc;
`;

// Temporary data before link DB
const temp_data = [
	{ id: '1', name: 'development', items: ['javascript', 'python'] },
	{ id: '2', name: 'TIL', items: ['English', 'Development'] },
];
// id: id, name: Large menu name, items: [small menu name, small menu name]

const Header = () => (
	<Container>
		<Logo />
		<Search>
			<SearchInput />
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
	</Container>
);

// Set PropTypes
export default Header;
