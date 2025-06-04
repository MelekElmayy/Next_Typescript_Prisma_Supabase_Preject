import { cn } from "@/lib/utils";
import React from "react";

function EmptyList(
  { heading = "No items found.",  }: { heading?: String },
  className?: string
) {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
}

export default EmptyList;
