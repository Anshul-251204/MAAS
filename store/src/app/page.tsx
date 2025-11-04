import Bento from "@/themes/bento/Bento";
import Minimal from "@/themes/minimal/Minimal";
import Regular from "@/themes/regular/Regular";
import axios from "axios";

export default async function Home() {
	return (
		<>
			<div>
				<Regular/>
				{/* <Bento /> */}
				{/* <Minimal/> */}
			</div>
		</>
	);
}
