import React, { useState, useMemo, useCallback } from "react";

// Heavy calculation function
const heavyCalculation = (num: number) => {
	console.log("Heavy calculation running...");
	let result = 0;
	for (let i = 0; i < 100000000; i++) {
		result += i * num;
	}
	return result;
};

// Child component wrapped with React.memo
const Child = React.memo(({ count }: { count: number }) => {
	console.log("Child rendered");
	return <div>Child Count: {count}</div>;
});

// Optimized unnecessary component (also memoized)
const UnnecessaryComponent = React.memo(() => {
	console.log("UnnecessaryComponent rendered");
	return <div>This component does nothing important</div>;
});

export default function OptimizedPerformanceDemo() {
	const [counter, setCounter] = useState(0);
	const [input, setInput] = useState(1);

	// ----- Optimization #1: useMemo for heavy calculation -----
	const result = useMemo(() => heavyCalculation(input), [input]);

	// ----- Optimization #2: useCallback for stable function reference -----
	const increment = useCallback(() => setCounter((prev) => prev + 1), []);

	return (
		<div style={{ padding: "20px" }}>
			<h2>Optimized Performance Component</h2>

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

			{/* Memoized Child component */}
			<Child count={counter} />

			{/* Memoized unnecessary components */}
			<UnnecessaryComponent />
			<UnnecessaryComponent />
			<UnnecessaryComponent />
		</div>
	);
}
