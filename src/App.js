import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import PictureFrame from "./components/Frame/Frame";
import Button from "./components/Button/Button";
import handsomeBasset from "./assets/handsomeBasset.jpeg";
import axios from "axios";

/* 
TODO / Feature Request: We need more pups! I know there are hundreds -- no, THOUSANDS of pups
out there. Not saying that our handsome basset isn't perfect, but lets give some other pups a
chance to shine. Let's make our button fetch from the provided api, and display the result in the frame. 

INFO: if there are issues using hooks, this may be helpful: https://github.com/facebook/react/issues/14484
*/

function App() {
	/////STATE/////
	const [image, setImage] = useState(handsomeBasset);
	const [prevImg, setPrevImg] = useState();

	/////Fetch Dog Image From API/////
	const fetchDoggyImage = () => {
		axios
			.get("https://dog.ceo/api/breeds/image/random")
			.then((response) => {
				setPrevImg(image);
				setImage(response.data.message);
			})
			.catch((err) => {
				console.log("OOPS THERES AN ERROR", err);
			});
	};
	////Back Button Helper/////
	const previousDoggyImage = () => {
		setImage(prevImg);
	};

	////APP////
	return (
		<div>
			<Body>
				<Header>
					<Logo>Sphere Pups</Logo>
				</Header>
				<div className="photo-container">
					{prevImg && (
						<Button
							onClick={previousDoggyImage}
							setImage={setImage}
							prevImg={prevImg}>
							Back
						</Button>
					)}
					<PictureFrame>
						<Image src={image} />
					</PictureFrame>
					<Button
						onClick={fetchDoggyImage}
						setImage={setImage}
						image={image}
						setPrevImg={setPrevImg}>
						GET MOAR PUPS
					</Button>
				</div>
				<Footer>© 1996</Footer>
			</Body>
		</div>
	);
}

/////STYLED COMPONENTS/////
const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Body = styled.div`
	background-color: #4a274f;
	color: white;
	display: flex;
	flex-direction: column;
	font-size: calc(10px + 2vmin);
	min-height: 100vh;
	padding: 40px;
`;

const Header = styled.div`
	align-items: center;
	height: 15vmin;
	display: flex;
	justify-content: space-between;
`;

const Logo = styled.h1`
	display: flex;
	justify-content: center;
	animation: ${Animation} infinite 5s linear;
	border-bottom: 5px solid #f0a07c;
	pointer-events: none;
	user-select: none;
	font-family: Mercury-Bold;
`;

const Image = styled.img`
	align-self: center;
	border-radius: 5px;
	height: auto;
	margin: auto;
	width: 50vmin;
`;

const Footer = styled.div`
	display: flex;
	font-size: 16px;
	height: 20vmin;
	justify-content: center;
	width: 100%;
`;

export default App;
