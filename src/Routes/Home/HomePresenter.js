import React from 'react';
import PostListItem from 'Components/PostListItem';
import styled from 'styled-components';

const temp_data = [
	{
		id: 1,
		type: 'javascript',
		title: 'Javascript study',
		date: '2021-01-11',
		tags: ['javascript', 'frontend'],
	},
	{
		id: 2,
		type: 'python',
		title: 'python study',
		date: '2021-01-11',
		tags: ['python', 'backend'],
	},
	{
		id: 3,
		type: 'python',
		title: 'python study',
		date: '2021-01-11',
		tags: ['python', 'backend'],
	},
	{
		id: 4,
		type: 'python',
		title: 'python study',
		date: '2021-01-11',
		tags: ['python', 'backend'],
	},
	{
		id: 5,
		type: 'python',
		title: 'python study',
		date: '2021-01-11',
		tags: ['python', 'backend'],
	},
	{
		id: 6,
		type: 'python',
		title: 'python study',
		date: '2021-01-11',
		tags: ['python', 'backend'],
	},
	{
		id: 7,
		type: 'python',
		title: 'python study',
		date: '2021-01-11',
		tags: ['python', 'backend'],
	},
];

const Container = styled.div`
	width: 100vw;
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const HomePresenter = () => (
	<Container>
		{temp_data.map(post => (
			<PostListItem post={post} key={post.id} />
		))}
	</Container>
);

export default HomePresenter;
