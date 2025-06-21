import { ReactNode } from "react";

export function TypographyH1({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
			{children}
		</h1>
	);
}
