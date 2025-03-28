import Link from "next/link";
import Image from "next/image";
import {
	RiFacebookLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	return (
		<footer className="bg-neutral-200 mt-10 md:mt-16 py-2 sm:py-4">
			<div className="container mx-auto flex justify-between sm:items-end flex-col sm:flex-row">
				<Link href="/">
					<Image
						src="/logo.webp"
						alt="Logo"
						width={244}
						height={100}
						className="w-52 p-2"
					/>
				</Link>
				<div className="flex mx-2 my-2 sm:my-0">
					<a
						href="https://www.instagram.com/kurjainteriorspace/"
						aria-label="facebook"
						target="_blank"
						rel="noreferrer">
						<RiFacebookLine className="w-8 h-8 p-1 ml-2 hover:bg-gradient-to-r to-orange-300 via-red-400 from-red-600 hover:text-white border rounded-full border-gray-500 text-gray-500" />
					</a>
					<a
						href="https://www.instagram.com/kurjainteriorspace/"
						aria-label="instagram"
						target="_blank"
						rel="noreferrer">
						<RiInstagramLine className="w-8 h-8 p-1 ml-2 hover:bg-gradient-to-r to-orange-300 via-red-400 from-red-600 hover:text-white border rounded-full border-gray-500 text-gray-500" />
					</a>
					<a
						href="https://www.linkedin.com/company/kurja-interior-space/"
						aria-label="linkedin"
						target="_blank"
						rel="noreferrer">
						<RiLinkedinLine className="w-8 h-8 p-1 ml-2 hover:bg-gradient-to-r to-orange-300 via-red-400 from-red-600 hover:text-white border rounded-full border-gray-500 text-gray-500" />
					</a>
					<a
						href="https://youtube.com/@kurjainteriorspace"
						aria-label="youtube"
						target="_blank"
						rel="noreferrer">
						<RiYoutubeLine className="w-8 h-8 p-1 ml-2 hover:bg-gradient-to-r to-orange-300 via-red-400 from-red-600 hover:text-white border rounded-full border-gray-500 text-gray-500" />
					</a>
				</div>
			</div>
			<div className="container mx-auto p-2 mt-2 sm:mt-4 flex justify-between items-center font-light text-xs sm:text-sm text-gray-600 border-t border-gray-400">
				<p>© Copyright {currentYear} - Kurja Interior Space LLP.</p>
				<p>All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
