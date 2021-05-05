import React from "react";
import styled from "styled-components";

export default function MyButton(props) {
	// function FetchDoggyImage() {
	// 	return axios
	// 		.get("https://dog.ceo/api/breeds/image/random")
	// 		.then((response) => {
	// 			// console.log(response.data.message, "response image");
	// 			props.setPrevImg(props.image);
	// 			props.setImage(response.data.message);
	// 		})
	// 		.catch((err) => {
	// 			console.log("OOPS THERES AN ERROR", err);
	// 		});
	// }

	return <Button onClick={props.onClick}>{props.children}</Button>;
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
