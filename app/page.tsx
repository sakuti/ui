import Counter from '@/components/Counter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="p-5 flex items-center justify-center min-h-screen flex-col gap-4">
			<Counter />
	
			<Link href="/testing" className="fixed bottom-0 right-0 m-5">
				<Button>Go back to the testing page</Button>
			</Link>

			<p className='text-black/60 text-xs max-w-72 text-center mt-5'>
				Placeholder application built with <b>Next.js App Router</b>, <b>Redux</b>, <b>Tailwind</b> and <b>shadcn/ui</b>.
			</p>
		</main>
	);
}