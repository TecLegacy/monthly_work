import Hello from '@/components/Hello';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <nav className=' flex  w-5/6 mx-auto justify-between items-center bg-transparent '>
        <h1>Redux Toolkit Cart</h1>

        <h1 className=' flex items-center mt-2  justify-center gap-4 bg-regal-blue text-blue-light rounded-md px-2 py-2'>
          <div>Cart</div>
          <div>0</div>
        </h1>
      </nav>

      <Cart />
    </>
  );
}

export default App;
