import axios from "axios";

export default function FetchDoggyImage() {
	return axios
		.get("https://dog.ceo/api/breeds/image/random")
		.then((response) => {
			console.log(response.data.message, "response image");
			const doggo = response.data.message;
			return doggo;
		})
		.catch((err) => {
			console.log("OOPS THERES AN ERROR", err);
		});
}
