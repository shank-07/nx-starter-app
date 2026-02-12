import React, { useState, useEffect, useMemo, useCallback } from "react";

// Heavy calculation function (simulates a performance bottleneck)
const heavyCalculation = (num: number) => {
	console.log("Running heavy calculation...");
	let result = 0;
	for (let i = 0; i < 100000000; i++) {
		result += i * num;
	}
	return result;
};

// Child component to track render frequency
// const RenderCounter: React.FC<{ count: number, label: string }> = React.memo(({ count, label }) => {
// 	console.log(`RenderCounter [${label}] rendered`);
// 	return <div>{label}: {count}</div>;
// });

const RenderCounter: React.FC<{ count: number, label: string }> = ({ count, label }) => {
	console.log(`RenderCounter [${label}] rendered`);
	return <div>{label}: {count}</div>;
};

export default function PerformanceDemo() {
	const [counter, setCounter] = useState(0);
	const [input, setInput] = useState(1);

	// ----- Example 1: Performance bottleneck -----
	// Without useMemo, heavyCalculation will run on every render
	const heavyResult = useMemo(() => heavyCalculation(input), [input]);

	// ----- Example 2: Callback efficiency -----
	// Without useCallback, incrementCounter will be recreated on every render
	const incrementCounter = useCallback(() => {
		setCounter((prev) => prev + 1);
	}, []);

	// ----- Example 3: Tracking render frequency -----
	// The child component is memoized to prevent unnecessary renders
	// It will only re-render if its props change
	return (
		<div style={{ padding: "20px", fontFamily: "Arial" }}>
			<h2>React Performance Demo</h2>

			{/* Input for heavy calculation */}
			<div>
				<label>Enter a number: </label>
				<input
					type="number"
					value={input}
					onChange={(e) => setInput(Number(e.target.value))}
				/>
			</div>

			{/* Display heavy calculation result */}
			<div>Heavy calculation result: {heavyResult}</div>

			{/* Counter with memoized increment */}
			<div style={{ marginTop: "20px" }}>
				<button onClick={incrementCounter}>Increment Counter</button>
				<RenderCounter count={counter} label="Counter" />
			</div>

			{/* Extra: Another counter to show unnecessary re-renders */}
			<ExtraCounter counter={counter} />
		</div>
	);
}

//  counter component to show unnecessary re-renders
function ExtraCounter(props: { counter: number }) {
	console.log("ExtraCounter rendered (unoptimized)");
	return <div>Extra Counter (re-renders every time): {props.counter}</div>;
}
