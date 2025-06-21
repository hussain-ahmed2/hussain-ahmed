"use client";

import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import { ScrollAnimate } from "./motion/scroll-animation";

const navLinks = [
	{ href: "/#hero", content: "Home" },
	{ href: "/#about", content: "About" },
	{ href: "/#projects", content: "Projects" },
	{ href: "/#contact", content: "Contact" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<header>
			<ScrollAnimate
				variant="fadeDown"
				ease="easeIn"
				className="border-b fixed top-0 left-0 right-0 bg-background z-50"
			>
				<nav className="flex items-center justify-between max-w-6xl mx-auto min-h-16 px-2 sm:px-4">
					<div className="block md:hidden">
						<Button
							className={clsx(open && "bg-secondary/80")}
							onClick={toggleMenu}
							variant="ghost"
							size="iconLg"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								fill="none"
								viewBox="0 0 48 48"
								stroke="currentColor"
								strokeWidth="6"
							>
								<line
									x1="4"
									y1="14"
									x2="44"
									y2="14"
									strokeLinecap="round"
								/>
								<line
									x1="4"
									y1="34"
									x2="44"
									y2="34"
									strokeLinecap="round"
								/>
							</svg>
						</Button>
					</div>

					<Link onClick={handleClose} href="/" className="logo">
						Hussain
					</Link>

					<div
						className={`${
							open ? "" : "-translate-x-full"
						} transition transform duration-300 md:hidden fixed top-16 left-0 right-0 bg-background border-t flex flex-col h-full`}
					>
						{navLinks.map(({ href, content }) => (
							<Link
								className={clsx(
									"mobile-nav-link",
									pathname === href &&
										"text-neutral-950 dark:text-neutral-50"
								)}
								href={href}
								key={href}
								onClick={handleClose}
							>
								{content}
							</Link>
						))}
					</div>

					<div className="space-x-8 hidden md:block">
						{navLinks.map(({ href, content }) => (
							<Link
								className={clsx(
									"nav-link",
									pathname === href &&
										"text-neutral-950 dark:text-neutral-50"
								)}
								href={href}
								key={href}
							>
								{content}
							</Link>
						))}
					</div>

					<ModeToggle />
				</nav>
			</ScrollAnimate>
		</header>
	);
}
