import ContactForm from "@/components/form";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constants";
import { GiPencilRuler, GiPaintRoller } from "react-icons/gi";
import { LuClock3 } from "react-icons/lu";
import { RiToolsLine } from "react-icons/ri";
import { PiHandshakeFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";

const Contact = () => {
	return (
		<section>
			<div className="bg-contactImg bg-cover bg-center">
				<div className="filter backdrop-blur-sm bg-black/40">
					<div className="container mx-auto w-full py-0 sm:py-4 md:py-6 lg:py-8 flex flex-col md:flex-row items-center justify-between">
						<div className="w-1/2 hidden md:block font-medium text-2xl sm:text-3xl md:text-6xl text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
							Kurja <br />
							Interior Space
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-16 items-center justify-center">
				<div className="mb-8">
					<p className="font-light uppercase text-xs sm:text-sm md:text-md text-center ">
						Inquire & Connect
					</p>
					<h1 className="mb-4 text-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
						Where Connections Meet Convenience
					</h1>
					<div className="space-y-2 flex flex-col items-start justify-start p-4 text-gray-600">
						<a
							href="https://maps.app.goo.gl/dPnkbARkjK3eX1BD9"
							aria-label="google maps"
							target="_blank"
							rel="noreferrer"
							className="flex items-center hover:text-red-600 cursor-pointer">
							<FiMapPin className="mr-2 h-5 w-5 text-red-600" />
							#51, 3rd Block, D Group Layout Herohalli, Bengaluru - 560091
						</a>
						<a
							href="tel:+91 98454 62920"
							aria-label="phone"
							className="flex items-center hover:text-red-600 cursor-pointer">
							<FiPhone className="mr-2 h-5 w-5 text-red-600" />
							(+91) 98454 62920
						</a>
						<a
							href="mailto:kurjainteriorspace@gmail.com"
							aria-label="email"
							className="flex items-center hover:text-red-600 cursor-pointer">
							<FiMail className="mr-2 h-5 w-5 text-red-600" />
							kurjainteriorspace@gmail.com
						</a>
						<a
							href="https://wa.me/919845462920?text=Hello%2C%20I%20am%20interested%20in%20Kurja%20Interiors%20design%20services.%20Can%20you%20please%20provide%20more%20details%3F"
							target="_blank"
							aria-label="whatsapp"
							className="flex items-center hover:text-red-600 cursor-pointer">
							<SiWhatsapp className="mr-2 h-5 w-5 text-red-600" />
							WhatsApp Us
						</a>
					</div>
				</div>
				<div className="h-full mx-4 ">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.55115162445!2d77.4812986750652!3d13.000535187317405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc644dafa6b%3A0xc3325212f780b214!2sKURJA%20INTERIOR%20SPACE!5e0!3m2!1sen!2sin!4v1742560022309!5m2!1sen!2sin"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen={false}
						loading="lazy"
						className="w-full h-full rounded-lg shadow-xl border-2 "></iframe>
				</div>
			</div>
			<div className="my-6 sm:my-10 md:my-16 bg-neutral-100">
				<div className="container mx-auto  py-6 md:py-10">
					<p className="font-light uppercase text-xs sm:text-sm md:text-md text-center ">
						Our Unique Advantage
					</p>
					<h1 className="mb-4 md:mb-10 text-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
						Why Choose Kurja?
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="">
							<h2 className="mb-4 text-center text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
								Designs Tailored to You
							</h2>
							<p className="text-gray-600 mx-4 md:mx-10 text-center">
								At Kurja, we make creating your dream space
								effortless. From concept to completion, we
								deliver stunning interiors that reflect your
								personality and lifestyle, all within your
								timeline and budget. Our team of experts
								combines innovation with craftsmanship to curate
								unique spaces that are both functional and
								elegant. With Kurja, luxury is reimagined - it's
								about creating homes you'll love, not just
								following trends.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<h2 className="mb-4 text-center text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
								What Sets Us Apart
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								<div className="cursor-pointer flex items-center mb-1 hover:shadow-lg hover:shadow-red-100 transform transition ease-linear duration-200 scale-95 hover:scale-100 p-2 rounded-md">
									<LuClock3 className="w-8 h-8 p-1 mr-2 rounded-md text-red-600" />
									<p className="text-gray-600">
										Timely Delivery
									</p>
								</div>
								<div className="cursor-pointer flex items-center mb-1 hover:shadow-lg hover:shadow-red-100 transform transition ease-linear duration-200 scale-95 hover:scale-100 p-2 rounded-md">
									<GiPencilRuler className="w-8 h-8 p-1 mr-2 rounded-md text-red-600" />
									<p className="text-gray-600">
										Original Designs
									</p>
								</div>
								<div className="cursor-pointer flex items-center mb-1 hover:shadow-lg hover:shadow-red-100 transform transition ease-linear duration-200 scale-95 hover:scale-100 p-2 rounded-md">
									<GiPaintRoller className="w-8 h-8 p-1 mr-2 rounded-md text-red-600" />
									<p className="text-gray-600">
										Quality Craftsmanship
									</p>
								</div>
								<div className="cursor-pointer flex items-center mb-1 hover:shadow-lg hover:shadow-red-100 transform transition ease-linear duration-200 scale-95 hover:scale-100 p-2 rounded-md">
									<RiToolsLine className="w-8 h-8 p-1 mr-2 rounded-md text-red-600" />
									<p className="text-gray-600">
										Seamless Execution
									</p>
								</div>
								<div className="cursor-pointer flex items-center mb-1 hover:shadow-lg hover:shadow-red-100 transform transition ease-linear duration-200 scale-95 hover:scale-100 p-2 rounded-md">
									<PiHandshakeFill className="w-8 h-8 p-1 mr-2 rounded-md text-red-600" />
									<p className="text-gray-600">
										Client-Centric Approach
									</p>
								</div>
								<div className="cursor-pointer flex items-center mb-1 hover:shadow-lg hover:shadow-red-100 transform transition ease-linear duration-200 scale-95 hover:scale-100 p-2 rounded-md">
									<FaPeopleGroup className="w-8 h-8 p-1 mr-2 rounded-md text-red-600" />
									<p className="text-gray-600">Expert Team</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-4 md:py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
				<p className="font-light uppercase text-xs sm:text-sm md:text-md text-center ">
					What Our Clients Say
				</p>
				<h1 className="mb-4 md:mb-10 text-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
					Designs That Speak for Themselves
				</h1>
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="normal"
				/>
			</div>
		</section>
	);
};

export default Contact;
