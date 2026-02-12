import { useState } from 'react';
import { useCounterStore } from '../app/store/useCounterStore';

export function CounterZustand() {
    const { count, add, subtract, multiply, reset } = useCounterStore();
    const [inputValue, setInputValue] = useState<number>(0);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Counter / Calculator (Zustand)</h1>
            <div style={{ fontSize: '2rem', margin: '20px 0' }}>
                Value: <strong>{count}</strong>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    style={{ padding: '8px', marginRight: '10px' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button
                    onClick={() => add(inputValue)}
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Add
                </button>
                <button
                    onClick={() => subtract(inputValue)}
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Subtract
                </button>
                <button
                    onClick={() => multiply(inputValue)}
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Multiply
                </button>
                <button
                    onClick={() => reset()}
                    style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none' }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CounterZustand;
