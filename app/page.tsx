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
		</main>
  );
}