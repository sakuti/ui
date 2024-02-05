"use client";

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { increment, decrement } from '@/redux/features/counterSlice';
import { RootState } from '@/redux/store';
import { Button } from '@/components/ui/button';

const Counter = () => {
	const count: number = useAppSelector((state: RootState) => state.counter);
	const dispatch = useAppDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-center'>Counter: <span className='font-bold'>{count}</span></h1>

			<div>
				<Button variant='secondary' className='mx-2' onClick={handleIncrement}>Increment</Button>
				<Button variant='secondary' className='mx-2' onClick={handleDecrement}>Decrement</Button>
			</div>
		</div>
	);
};

export default Counter;