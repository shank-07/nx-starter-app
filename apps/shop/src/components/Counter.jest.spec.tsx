import { fireEvent, screen, render } from '@testing-library/react';
import { CounterJest } from './CounterJest';
import '@testing-library/jest-dom';

describe('Counter', () => {
	test('renders with initial count of 0', () => {
		render(<CounterJest />);
		expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
	});

	test('increments count when button is clicked', () => {
		render(<CounterJest />);
		const button = screen.getByRole('button', { name: /increment/i });
		fireEvent.click(button);
		expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
	});

	test('Check if title exist', () => {
		render(<CounterJest />); // this will render the component using jest/dom library
		expect(screen.getByText(/Counter Component/i)).toBeInTheDocument(); // this is our conditional check
		// toBeInTheDocument == does it exist
	});
});