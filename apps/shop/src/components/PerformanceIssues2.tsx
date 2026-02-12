import React, { useState } from "react";

// Heavy calculation function
const heavyCalculation = (num: number) => {
	console.log("Heavy calculation running...");
	let result = 0;
	for (let i = 0; i < 100000000; i++) {
		result += i * num;
	}
	return result;
};

// Child component that always re-renders unnecessarily
function Child({ count }: { count: number }) {
	console.log("Child rendered");
	return <div>Child Count: {count}</div>;
}

export default function BadPerformanceDemo() {
	const [counter, setCounter] = useState(0);
	const [input, setInput] = useState(1);

	// ----- Performance Issue #1: Heavy calculation runs EVERY render -----
	const result = heavyCalculation(input); // ad: no memoization

	// ----- Performance Issue #2: Anonymous function in render -----
	// Every render, this function is recreated, causing child re-renders
	const increment = () => setCounter(counter + 1); // Bad: inline function

	// ----- Performance Issue #3: Child always re-renders -----
	// Not memoized, so even if props didn't change, it re-renders
	return (
		<div style={{ padding: "20px" }}>
			<h2>Bad Performance Component</h2>

			<div>
				<label>Enter a number: </label>
				<input
					type="number"
					value={input}
					onChange={(e) => setInput(Number(e.target.value))}
				/>
			</div>

			<div>Heavy Calculation Result: {result}</div>

			<button onClick={increment}>Increment Counter</button>

			<Child count={counter} />

			{/* Extra: Multiple useless components */}
			<UnnecessaryComponent />
			<UnnecessaryComponent />
			<UnnecessaryComponent />
		</div>
	);
}

// Performance Issue #4: Extra unnecessary components
function UnnecessaryComponent() {
	console.log("UnnecessaryComponent rendered");
	return <div>This component does nothing important</div>;
}
