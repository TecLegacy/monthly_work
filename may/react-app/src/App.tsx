// import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './store/app/hooks';
function App() {
  // const counter = useSelector(state => state.counter);
  const counter = useAppSelector(state => state.counter);
  return (
    <>
      <h1>Counter With TypeScript and Redux Toolkit</h1>
      <div>
        <p>
          The Value of count is <span>{counter}</span>
        </p>
        <button>Increase</button>
      </div>
    </>
  );
}

export default App;
