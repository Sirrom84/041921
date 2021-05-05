import React from "react";
import styled from "styled-components";

export default function PictureFrame(props) {
	return <Frame>{props.children}</Frame>;
}

//STYLES//

const Frame = styled.div`
	background-color: #d7b90b;
	border: solid 5vmin #eee;
	border-bottom-color: #fff;
	border-left-color: #eee;
	border-radius: 2px;
	border-right-color: #eee;
	border-top-color: #ddd;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
		0 5px 10px 5px rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
	padding: 10px;
	margin: auto;
	position: relative;
	text-align: center;
	transform: rotate(-1deg);
	&:before {
		border-radius: 2px;
		bottom: -2vmin;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
		content: "";
		left: -2vmin;
		position: absolute;
		right: -2vmin;
		top: -2vmin;
	}
	&:after {
		border-radius: 2px;
		bottom: -2.5vmin;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
		content: "";
		left: -2.5vmin;
		position: absolute;
		right: -2.5vmin;
		top: -2.5vmin;
	}
`;
