import Link from "next/link";
import Image from "next/image";
import {
	FaSquareTwitter,
	FaSquareInstagram,
	FaSquareFacebook,
	FaLinkedin,
	FaSquarePinterest,
} from "react-icons/fa6";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { navigationLinks } from "../constants";

const Footer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	return (
		<footer className="bg-gray-900 py-4 sm:py-6 md:py-8 lg:py-10">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
				<div className="p-4">
					<div className="hidden lg:block">
						<Link href="/">
							<Image
								src="/logo3D.png"
								alt="Logo"
								width={244}
					            height={100}
								className="mt-8 mb-4 w-52"
							/>
						</Link>
						<div className="flex">
							<a
								href="https://twitter.com/"
								target="_blank"
								rel="noreferrer">
								<FaSquareTwitter className="w-7 h-7 mr-1 text-white hover:text-green-600" />
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer">
								<FaSquareInstagram className="w-7 h-7 mr-1 text-white hover:text-green-600" />
							</a>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer">
								<FaSquareFacebook className="w-7 h-7 mr-1 text-white hover:text-green-600" />
							</a>
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noreferrer">
								<FaLinkedin className="w-7 h-7 mr-1 text-white hover:text-green-600" />
							</a>
							<a
								href="https://www.pinterest.com/"
								target="_blank"
								rel="noreferrer">
								<FaSquarePinterest className="w-7 h-7 mr-1 text-white hover:text-green-600" />
							</a>
						</div>
					</div>
				</div>
				<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
					<div className="flex flex-col">
						<h3 className="text-xl text-green-700 md:text-2xl font-medium">
							Quick Links
						</h3>
						{navigationLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="py-1 w-fit text-sm md:text-base hover:text-green-600 text-gray-400">
								{link.text}
							</Link>
						))}
					</div>
					<div className="flex flex-col">
						<h3 className="text-xl text-green-700 md:text-2xl font-semibold">
							Contact Us
						</h3>
						<p className="py-1 text-sm text-gray-400">
							1357 Work Plaza, JobHub Street, Workstate,
							Employland
							<br />
							Postal Code: 13579
						</p>
						<a
							className="py-2 w-fit flex flex-wrap items-center text-sm md:text-base text-gray-400 hover:text-green-600"
							href="mailto:support@jobhub.com">
							<MdEmail className="mr-1" />
							support@jobhub.com
						</a>
						<a
							className="flex flex-wrap w-fit items-center text-gray-400 text-sm md:text-base hover:text-green-600"
							href="tel:+1 (555) 123-4567">
							<MdLocalPhone className="mr-1" />
							+1 (555) 123-4567
						</a>
					</div>
				</div>
			</div>
			<div className="container mx-auto p-4 lg:hidden block">
				<Link href="/">
					<Image
						src="/logo3D.png"
						alt="logo"
						width={244}
					    height={100}
						className="mb-2 w-32"
					/>
				</Link>
				<div className="flex">
					<a
						href="https://twitter.com/"
						target="_blank"
						rel="noreferrer">
						<FaSquareTwitter className="w-7 h-7 mr-1 text-gray-400 hover:text-green-600" />
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noreferrer">
						<FaSquareInstagram className="w-7 h-7 mr-1 text-gray-400 hover:text-green-600" />
					</a>
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noreferrer">
						<FaSquareFacebook className="w-7 h-7 mr-1 text-gray-400 hover:text-green-600" />
					</a>
					<a
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noreferrer">
						<FaLinkedin className="w-7 h-7 mr-1 text-gray-400 hover:text-green-600" />
					</a>
					<a
						href="https://www.pinterest.com/"
						target="_blank"
						rel="noreferrer">
						<FaSquarePinterest className="w-7 h-7 mr-1 text-gray-400 hover:text-green-600" />
					</a>
				</div>
			</div>
			<div className="container mx-auto p-2 mt-4 md:mt-8 flex flex-wrap text-gray-400 font-thin text-sm sm:text-base border-t-2 border-gray-300 justify-center items-center">
				Copyright © {currentYear} - Kurja | Developed by
				<a
					href="https://theharishjangid.github.io/harishjangid/"
					target="_blank"
					rel="noreferrer"
					className="ml-1 hover:text-green-600 hover:underline">
					Harish Jangid
				</a>
			</div>
		</footer>
	);
};

export default Footer;