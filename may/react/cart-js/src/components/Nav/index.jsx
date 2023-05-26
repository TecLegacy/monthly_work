import { useSelector } from 'react-redux';
const Nav = () => {
  const product = useSelector(state => state.cart.product);
  return (
    <nav className=' flex  w-5/6 mx-auto justify-between items-center bg-transparent '>
      <h1>Redux Toolkit Cart</h1>

      {/* Cart Counter */}
      <h1 className=' flex items-center mt-2  justify-center gap-4 bg-regal-blue text-blue-light rounded-md px-2 py-2'>
        <div>Cart</div>
        <div>{product.length}</div>
      </h1>
    </nav>
  );
};

export default Nav;
