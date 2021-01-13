import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	margin: 15px 0;
	padding: 20px;
	border-bottom: 1px solid #cccccc;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 0;
`;

const Type = styled.span`
	color: #9999cc;
	font-weight: 500;
`;

const CreateDate = styled.span`
	color: #999999;
	font-size: 0.8rem;
`;

const Title = styled.h3`
	padding-bottom: 5px;
	font-size: 1.4rem;
	font-weight: 500;
	color: #333333;
`;

const Tags = styled.div`
	color: #9999cc;
	font-size: 0.9rem;
`;

const Tag = styled.span``;

const PostListItem = ({ post }) => (
	<Item>
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
