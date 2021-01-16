/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import PostPresenter from 'Routes/Post/PostPresenter';

const temp_data = {
	type: 'JavaScript',
	createDate: '2021-01-12',
	title: 'JavaScript Fundementals',
	contents:
		'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext',
	tags: ['JavaScript', 'Markdown_Editor'],
};

export default class extends React.Component {
	render() {
		return (
			<PostPresenter
				type={temp_data.type}
				createDate={temp_data.createDate}
				title={temp_data.title}
				contents={temp_data.contents}
				tags={temp_data.tags}
			/>
		);
	}
}
