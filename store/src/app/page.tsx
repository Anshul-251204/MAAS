import Bento from "@/themes/bento/Bento";
import Minimal from "@/themes/minimal/Minimal";
import axios from "axios";

export default async function Home() {
	return (
		<>
			<div>
				<Bento />
				{/* <Minimal/> */}
			</div>
		</>
	);
}
