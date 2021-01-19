import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
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
	padding: 30px 40px;
	background-color: #9999cc;
	${props => (props.isHome ? '' : 'display:none')};
`;

const HideMenuContainer = styled.div`
	width: 300px;
	position: fixed;
	left: 0;
	padding: 30px 40px;
	display: flex;
	align-items: center;
	${props => (props.isHome ? 'display:none' : '')};
`;

const Logo = styled.div`
	/* align-self: start;
	margin-left: 40px; */
	margin-bottom: 60px;
`;

const Menu = styled(FontAwesomeIcon)`
	margin-right: 12px;
`;

const LogoImg = styled.img.attrs({
	src: `${LogoSrc}`,
})`
	width: 100px;
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

export default withRouter(({ location: { pathname } }) => (
	<>
		<Container isHome={pathname === '/'}>
			<Logo>
				<LogoImg isHome={pathname === '/'} />
			</Logo>
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
		<HideMenuContainer isHome={pathname === '/'}>
			<Menu icon={faBars} size="2x" />
			<LogoImg isHome={pathname === '/'} />
		</HideMenuContainer>
	</>
));

// Set PropTypes
