import { Input } from "@/components/ui/Input";
import { Logs, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div className="w-full py-4 px-8  flex items-center justify-between">
			<div className="flex gap-8 w-[30%]">
				<Logs />
				<Link className="text-sm  font-semibold" href={"#"}>
					Home
				</Link>
				<Link className="text-sm  font-semibold" href={"#"}>
					Products
				</Link>
			</div>

			<div>
				<Image
					className=" object-cover w-[40px] h-[40px] rounded-full "
					width={30}
					height={30}
					alt="logo"
					src={
						"https://plus.unsplash.com/premium_photo-1661962960694-0b4ed303744f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=620"
					}
				/>
			</div>

			<div className="flex gap-8 w-[30%] justify-end">
				<button className="p-2 w-fit h-fit bg-accent text-white rounded-full">
					<Search size={"18px"} />
				</button>

				<button className="p-2 w-fit h-fit bg-accent text-white rounded-full">
					<ShoppingCart size={"18px"} />
				</button>

				<button className="p-2 w-fit h-fit bg-accent text-white rounded-full">
					<User size={"18px"} />
				</button>
			</div>
		</div>
	);
};

export default Nav;
