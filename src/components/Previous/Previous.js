import React from "react";
import styled from "styled-components";

export default function Previous(props) {
	// console.log("HELLO", props);
	function getPrevious() {
		props.setImage(props.prevImg);
	}
	return <PrevButton onClick={getPrevious}>{props.children}</PrevButton>;
}
const PrevButton = styled.div`
	--size: 10vmin;
	overflow: hidden;
	display: flex;

	justify-content: center;
	align-items: baseline;

	background: #d7b90b;
	border: 5px solid red;
	border-radius: var(--size);
	cursor: pointer;
	height: var(--size);
	font-size: 60%;
	margin: 20px;
	padding: 4px;
	text-align: center;
	transition: transform 100ms ease;
	width: var(--size);

	&:active {
		transform: scale(0.8);
	}
`;
