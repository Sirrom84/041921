import React from "react";
import styled from "styled-components";

export default function MyButton(props) {
	console.log("Hello", props);
	return (
		<Button type={props.type || "button"} onClick={props.onClick}>
			{props.children}
		</Button>
	);
}
const Button = styled.div`
	--size: 10vmin;
	background: #d7b90b;
	border: 5px solid red;
	border-radius: var(--size);
	cursor: pointer;
	height: var(--size);
	font-size: 80%;
	margin: 20px;
	padding: 4px;
	text-align: center;
	transition: transform 100ms ease;
	width: var(--size);

	&:active {
		transform: scale(0.8);
	}
`;
