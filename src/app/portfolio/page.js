import { FocusCards } from "@/components/ui/focus-cards";
import { portfolioData } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
	return (
		<main className="container mx-auto">
			<p className="mt-10 font-light uppercase text-xs sm:text-sm md:text-md text-center">
			Our Work in Focus
			</p>
			<h1 className="text-center mb-12 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
				Where Vision Meets Reality
			</h1>
			<Tabs defaultValue="residential">
				<div className="flex items-center justify-center mb-10">
					<TabsList>
						<TabsTrigger value="residential">
							Residential
						</TabsTrigger>
						<TabsTrigger value="commercial">Commercial</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="residential">
					<FocusCards cards={Object.values(portfolioData).filter(item => item.type === "Residential")} />
				</TabsContent>
				<TabsContent value="commercial">
					<FocusCards cards={Object.values(portfolioData).filter(item => item.type === "Commercial")} />
				</TabsContent>
			</Tabs>
		</main>
	);
}
