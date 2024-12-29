"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { navigationLinks } from "../constants";

const Navbar = () => {
	const pathname = usePathname();
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className="bg-white sticky top-0 z-[200] shadow-lg">
			<nav className="container mx-auto flex justify-between items-center p-2">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="Logo"
						width={244}
						height={100}
						className="w-20"
					/>
				</Link>
				<div className="hidden sm:block">
					{navigationLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={`p-2 md:mx-1 hover:text-red-600 text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 inline-block${
								pathname === link.href
									? "font-bold border-b-2 border-red-600"
									: ""
							}`}>
							{link.text}
						</Link>
					))}
				</div>
				<Link href="/contact">
					<button className="hidden sm:block px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:shadow-lg">
						Hire Us
					</button>
				</Link>
				<IoMenu
					className="sm:hidden w-8 h-8 p-1 mr-1 rounded-full bg-red-50 text-red-600"
					onClick={() => setShowMenu(!showMenu)}
				/>
				<div
					className={`z-50 fixed right-0 top-0 p-2 h-screen bg-white w-2/3 flex flex-col justify-between ${
						showMenu ? "sm:block" : "hidden"
					}`}>
					<div className="flex flex-col">
						<IoClose
							className="w-8 h-8 p-1 mr-1 self-end rounded-full bg-red-50 text-red-600"
							onClick={() => setShowMenu(!showMenu)}
						/>
						<div className="font-light flex flex-col">
							{navigationLinks.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									onClick={() => setShowMenu(false)}
									className={`p-2 w-fit hover:text-red-600 text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 inline-block${
										pathname === link.href
											? "font-medium border-b-2 border-red-600"
											: ""
									}`}>
									{link.text}
								</Link>
							))}
						</div>
					</div>
					<Link href="/contact">
						<button className="px-8 py-2  bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
							Hire Us
						</button>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
