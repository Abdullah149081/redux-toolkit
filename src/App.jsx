import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="mb-6 text-3xl font-bold">{count}</div>
        <div className="space-x-4">
          <button
            className="btn btn-secondary"
            type="button"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            type="button"
            className="btn btn-info"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
