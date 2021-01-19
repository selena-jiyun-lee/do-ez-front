/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

import WritePresenter from './WritePresenter';

marked.setOptions({
	langPrefix: 'hljs language-',
	renderer: new marked.Renderer(),
	highlight: function (code) {
		return hljs.highlightAuto(code).value;
	},
	pedantic: false,
	gfm: true,
	breaks: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	xhtml: false,
});

export default class extends React.Component {
	state = {
		contents: '',
		tags: [],
	};

	updateContents = event => {
		const {
			target: { value },
		} = event;

		this.setState({ contents: marked(value, { sanitize: true }) });
	};

	addTag = event => {
		const input = document.querySelector('input[name=tag]');
		const {
			key,
			target: { value },
		} = event;

		if (key === 'Enter') {
			let tags = this.state.tags;
			tags.push(value);
			this.setState({ tags: tags });
			input.value = '';
		}
	};

	deleteTag = event => {
		const {
			target: {
				previousSibling: { textContent },
			},
		} = event;
		const { tags } = this.state;
		const index = tags.indexOf(textContent);
		tags.splice(index, 1);
		this.setState({ tags: tags });
	};

	handleSubmit(event) {
		// console.log('submit!!');
	}

	handleKeyPress(event) {
		const { key } = event;
		if (key === 'Enter') {
			event.preventDefault();
		}
	}

	render() {
		const { contents, tags } = this.state;
		return (
			<WritePresenter
				contents={contents}
				tags={tags}
				updateContents={this.updateContents}
				addTag={this.addTag}
				deleteTag={this.deleteTag}
				handleSubmit={this.handleSubmit}
				handleKeyPress={this.handleKeyPress}
			/>
		);
	}
}
