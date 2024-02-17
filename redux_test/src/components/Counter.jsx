import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, incrementByValue} from "../redux/features/counter/counterSlice"

const Counter = () => {

    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="flex gap-10 justify-center w-full mt-32 items-center">
            <button onClick={() => dispatch(incrementByValue(5))} className="bg-purple-800 w-full max-w-32  text-purple-50 px-4 py-2 rounded-sm shadow-md hover:bg-purple-950">Increment 5</button>
            <button onClick={() => dispatch(decrement())} className="bg-purple-800 w-full max-w-32  text-purple-50 px-4 py-2 rounded-sm shadow-md hover:bg-purple-950">Decrement</button>
            <p className="text-4xl font-semibold">{count}</p>
            <button onClick={() => dispatch(increment())} className="bg-purple-800 w-full max-w-32  text-purple-50 px-4 py-2 rounded-sm shadow-md hover:bg-purple-950">Increment</button>
        </div>
    );
};

export default Counter;