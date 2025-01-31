"use client";

import { forwardRef } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = Root;

const TabsList = forwardRef(({ className, ...props }, ref) => (
	<List
		ref={ref}
		className={cn(
			"inline-flex items-center justify-center rounded-lg border border-red-100 shadow-lg shadow-red-100 bg-neutral-100 p-[0.3rem] text-gray-500 self-center",
			className
		)}
		{...props}
	/>
));
TabsList.displayName = List.displayName;

const TabsTrigger = forwardRef(({ className, ...props }, ref) => (
	<Trigger
		ref={ref}
		className={cn(
			"inline-flex items-center justify-center hover:text-red-600 data-[state=active]:hover:text-white whitespace-nowrap rounded-md px-4 sm:px-8 py-1 sm:py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-r to-orange-300 via-red-400 from-red-600 data-[state=active]:text-white",
			className
		)}
		{...props}
	/>
));
TabsTrigger.displayName = Trigger.displayName;

const TabsContent = forwardRef(({ className, ...props }, ref) => (
	<Content
		ref={ref}
		className={cn(
			"mt-4 sm:mt-8 md:mt-12 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			className
		)}
		{...props}
	/>
));
TabsContent.displayName = Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
