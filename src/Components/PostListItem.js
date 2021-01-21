import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled(Link)`
	width: 60%;
	padding: 20px;
	box-shadow: rgba(27, 31, 35, 0.09) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
	&:hover {
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 0;
`;

const Type = styled.span`
	font-weight: 500;
	color: #9999cc;
`;

const CreateDate = styled.span`
	font-size: 0.8rem;
	color: #999999;
`;

const Title = styled.h3`
	padding-bottom: 5px;
	font-size: 1.4rem;
	font-weight: 500;
	color: #333333;
`;

const Tags = styled.div`
	font-size: 0.9rem;
	color: #9999cc;
`;

const Tag = styled.span``;

const PostListItem = ({ post }) => (
	<Item to={`/post/${post.id}`}>
		<Row>
			<Type>{post.type}</Type>
			<CreateDate>{post.date}</CreateDate>
		</Row>
		<Row>
			<Title>{post.title}</Title>
		</Row>
		<Row>
			<Tags>
				{post.tags.map(tag => (
					<Tag key={tag}> #{tag}</Tag>
				))}
			</Tags>
		</Row>
	</Item>
);

// Set PropTypes
export default PostListItem;
