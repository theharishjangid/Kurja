"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(
			"text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
			className
		)}
		{...props}
	/>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
