import { FocusCards } from "@/components/ui/focus-cards";
import { residentialCards, commercialCards, luxuryCards } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
	return (
		<main className="container mx-auto">
			<h1 className="text-center my-12 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
				Where Vision Meets Reality
			</h1>
			<Tabs defaultValue="residential">
				<div className="flex items-center justify-center">
					<TabsList>
						<TabsTrigger value="residential">
							Residential
						</TabsTrigger>
						<TabsTrigger value="commercial">Commercial</TabsTrigger>
						<TabsTrigger value="luxury">Luxury</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="residential">
					<FocusCards cards={residentialCards} />
				</TabsContent>
				<TabsContent value="commercial">
					<FocusCards cards={commercialCards} />
				</TabsContent>
				<TabsContent value="luxury">
					<FocusCards cards={luxuryCards} />
				</TabsContent>
			</Tabs>
		</main>
	);
}
