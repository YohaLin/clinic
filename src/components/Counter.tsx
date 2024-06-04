import { useSelector, useDispatch } from "react-redux";
import { nextStepAction, lastStepAction } from "../store/features/step/stepSlice";

interface CounterType {
  step: { value: number };
}

export function Counter() {
  // useSelector 用來取得 state 中的值
  const step = useSelector((state: CounterType) => state.step.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          className="text-blue-500"
          onClick={() => dispatch(nextStepAction())}
        >
          nextStepAction
        </button>
        <span>{step}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(lastStepAction())}
        >
          lastStepAction
        </button>
      </div>
    </div>
  );
}
