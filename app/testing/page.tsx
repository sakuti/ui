import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TestPage() {
	return (
		<main className="p-5 flex items-center justify-center min-h-screen flex-col gap-4">
			<p className="max-w-80 text-center">This page is purely just for testing that the redux store is working correctly.</p>
			<Link href="/" className="fixed bottom-0 right-0 m-5">
				<Button>Go back to the main page</Button>
			</Link>
		</main>
	)
}