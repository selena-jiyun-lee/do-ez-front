import React from 'react';
import styled from 'styled-components';
import 'highlight.js/styles/atelier-cave-light.css';

const Container = styled.form`
	width: 80%;
	margin-top: 150px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;
	align-content: start;
`;

const Title = styled.input`
	grid-column: 1 / span 4;
	margin-bottom: 30px;
	border-bottom: 2px solid #9999cc;
	font-size: 1.5rem;
`;

const TagsInput = styled.input`
	grid-column: 3 / span 2;
`;

const Tags = styled.div`
	grid-column: 3 / span 2;
	display: flex;
	flex-wrap: wrap;
	min-height: 30px;
`;

const Tag = styled.span`
	width: auto;
	position: relative;
	padding: 7px 30px 7px 10px;
	margin: 3px 5px;
	border-radius: 10px;
	background-color: #9999cc;
	color: white;
`;

const DeleteTag = styled.a`
	position: absolute;
	right: 5px;
	top: 6px;
	padding: 3px 5px;
	border-radius: 10px;
	background-color: rgba(256, 256, 256, 0.5);
	font-size: 0.8rem;
`;

const Category = styled.select`
	height: 30px;
	grid-row: 2 / span 2;
`;

const SubCategory = styled.select`
	height: 30px;
	grid-row: 2 / span 2;
`;

const Contents = styled.textarea`
	height: 80vh;
	grid-column: 1 / span 2;
`;

const Preview = styled.div`
	height: 80vh;
	grid-column: 3 / span 2;
	padding: 10px 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Submit = styled.input.attrs({ type: 'submit' })`
	width: 80px;
	height: 30px;
	margin-top: 20px;
	grid-column: 4;
	justify-self: right;
	border-radius: 20px;
	background-color: #6600ff;
	color: white;
`;

const WritePresenter = ({
	contents,
	tags,
	updateContents,
	addTag,
	deleteTag,
	handleSubmit,
	handleKeyPress,
}) => (
	<Container onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
		<Title placeholder="Title" />
		<Category>
			<option value="development">Development</option>
			<option value="others">Others</option>
		</Category>
		<SubCategory>
			<option value="development">Development</option>
			<option value="others">Others</option>
		</SubCategory>
		<TagsInput name="tag" placeholder="HashTags" onKeyPress={addTag} />
		<Tags>
			{tags.map(tag => (
				<Tag key={tag}>
					#{tag}
					<DeleteTag onClick={deleteTag}>X</DeleteTag>
				</Tag>
			))}
		</Tags>
		<Contents onChange={updateContents} />
		<Preview dangerouslySetInnerHTML={{ __html: contents }}></Preview>
		<Submit />
	</Container>
);

export default WritePresenter;
