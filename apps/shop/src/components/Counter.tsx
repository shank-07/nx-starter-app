import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { add, subtract, multiply, reset } from '../app/store/counterSlice';

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<number>(0);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Counter / Calculator</h1>
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
                    onClick={() => dispatch(add(inputValue))}
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Add
                </button>
                <button
                    onClick={() => dispatch(subtract(inputValue))}
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Subtract
                </button>
                <button
                    onClick={() => dispatch(multiply(inputValue))}
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Multiply
                </button>
                <button
                    onClick={() => dispatch(reset())}
                    style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none' }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;