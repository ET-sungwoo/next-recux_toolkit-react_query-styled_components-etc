'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { actions } from '@/store/slice/counterSlice';

export default function Button() {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector(({ counter }) => counter);
    const { reset, setIncrementValue, setDecrementValue } = actions;
    return (
        <>
            <h4 style={{ marginBottom: 16 }}>{value}</h4>
            <button onClick={() => dispatch(setIncrementValue())}>increment</button>
            <button onClick={() => dispatch(setDecrementValue())} style={{ marginInline: 16 }}>
                decrement
            </button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
    );
}
