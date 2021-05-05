import React from "react";
import styled from "styled-components";

export default function MyButton(props) {
	return <Button onClick={props.onClick}>{props.children}</Button>;
}

//STYLES//

const Button = styled.div`
	--size: 10vmin;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f0a07c;
	overflow: hidden;
	border: 5px solid white;
	border-radius: var(--size);
	cursor: pointer;
	height: var(--size);
	font-size: 80%;
	margin: 20px;
	padding: 4px;
	text-align: center;
	transition: transform 100ms ease;
	width: var(--size);
	font-family: Mercury-Bold;

	&:active {
		transform: scale(0.8);
	}

	&:hover {
		background-color: #ffffff40;
		-webkit-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
		-moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
		box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
	}
`;
