import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 70%;
	margin-top: 150px;
	/* background-color: #ffffcc; */
`;
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
	margin-bottom: 20px;
`;
const Type = styled.div`
	font-weight: 500;
	font-size: 1.3rem;
	color: #9999cc;
`;
const CreateDate = styled.span`
	font-size: 0.9rem;
	color: #999999;
`;
const Title = styled.h1`
	width: 100%;
	padding-bottom: 20px;
	border-bottom: 1px solid #cccccc;
	font-size: 2.3rem;
	font-weight: 500;
`;
const Contents = styled.div`
	width: 100%;
	padding: 10px;
	word-break: break-all;
	font-size: 1.3rem;
	line-height: 1.5;
`;
const Tags = styled.div`
	font-weight: 400;
`;
const Tag = styled.a`
	padding: 0 5px;
`;

const PostPresenter = ({ title, type, contents, createDate, tags }) => (
	<Container>
		<Row>
			<Type>{type}</Type>
			<CreateDate>{createDate}</CreateDate>
		</Row>
		<Row>
			<Tags>
				{tags.map(tag => (
					<Tag key={tag}>#{tag}</Tag>
				))}
			</Tags>
		</Row>
		<Row>
			<Title>{title}</Title>
		</Row>
		<Row>
			<Contents>{contents}</Contents>
		</Row>
	</Container>
);

export default PostPresenter;
