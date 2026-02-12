import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { Counter } from './CounterJest';
import '@testing-library/jest-dom';

describe('Counter', () => {
	test('renders with initial count of 0', () => {
		render(<Counter />);
		expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
	});

	test('increments count when button is clicked', () => {
		render(<Counter />);
		const button = screen.getByRole('button', { name: /increment/i });
		fireEvent.click(button);
		expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
	});

	test('Check if title exist', () => {
		render(<Counter />); // this will render the component using jest/dom library
		expect(screen.getByText(/Counter Component/i)).toBeInTheDocument(); // this is our conditional check
		// toBeInTheDocument == does it exist
	});
});

import React, { useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);

	return (
		<div>
			<h2> Counter Component </h2>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
};
