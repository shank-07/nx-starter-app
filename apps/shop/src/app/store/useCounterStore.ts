import { create } from 'zustand';

interface CounterState {
    count: number;
    add: (value: number) => void;
    subtract: (value: number) => void;
    multiply: (value: number) => void;
    reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    add: (value) => set((state) => ({ count: state.count + value })),
    subtract: (value) => set((state) => ({ count: state.count - value })),
    multiply: (value) => set((state) => ({ count: state.count * value })),
    reset: () => set({ count: 0 }),
}));
