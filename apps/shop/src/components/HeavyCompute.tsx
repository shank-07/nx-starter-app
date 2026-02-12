// HeavyCompute.tsx
import React, { useState, useMemo, useEffect } from "react";
import axios from 'axios';

function heavyComputation(n: number): number {
	console.log("Running heavy computation...");
	let result = 0;
	for (let i = 0; i < n * 10_00_000; i++) {
		result += i % 7;
	}
	return result;
}

const HeavyComputeChildComponent: React.FC<{ input: number }> = ({ input }) => {
	const computedValue = useMemo(() => heavyComputation(input), [input]);

	return (
		<h1>
			Child components
		</h1>
	)
};

const HeavyCompute: React.FC = () => {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState(100);
	const [users, setUsers] = useState([]);

	// useMemo to show optimization later
	const computedValue = useMemo(() => heavyComputation(input), [input]);

	const fetchUserOnLoad = async () => {
		const result = await axios.get('http://localhost:3333/api/fetch-users');
		if (result && result.data) {
			setUsers(result.data);
		}
		console.log("COmpute done");
	};

	useEffect(() => {
		fetchUserOnLoad();
	}, []);

	return (
		<div style={{ padding: "20px", fontFamily: "sans-serif" }}>
			<h2>Heavy Compute Demo</h2>

			<div>
				<label>
					Input for heavy computation:{" "}
					<input
						type="number"
						value={input}
						onChange={(e) => setInput(Number(e.target.value))}
						style={{ width: "80px" }}
					/>
				</label>
			</div>

			<div style={{ margin: "10px 0" }}>
				<button onClick={() => setCount(count + 1)}>Re-render</button>
			</div>

			<div>
				<strong>Computed Value:</strong> {computedValue}
			</div>

			<div>
				<strong>Render Count:</strong> {count}
			</div>
			<HeavyComputeChildComponent input={10} />
			<HeavyComputeChildComponent input={50} />
			<HeavyComputeChildComponent input={30} />
			<HeavyComputeChildComponent input={90} />

		</div>
	);
};

export default HeavyCompute;
