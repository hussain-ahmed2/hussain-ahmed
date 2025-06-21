"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="iconLg">
					<Sun className="h-[1.25rem] w-[1.25rem] scale-100 rotate-0 transition transform duration-300 dark:scale-0 dark:-rotate-90" />
					<Moon className="absolute h-[1.25rem] w-[1.25rem] scale-0 rotate-90 transition transform duration-300 dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					className={clsx(
						theme === "light" &&
							"bg-neutral-100 dark:bg-neutral-800"
					)}
					onClick={() => setTheme("light")}
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className={clsx(
						theme === "dark" && "bg-neutral-100 dark:bg-neutral-800"
					)}
					onClick={() => setTheme("dark")}
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className={clsx(
						theme === "system" &&
							"bg-neutral-100 dark:bg-neutral-800"
					)}
					onClick={() => setTheme("system")}
				>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
