import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/store/cartSlice';

const CartProducts = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.cart.product);

  // Add item to cart (store)
  const addToCart = product => {
    dispatch(cartActions.addToCart(product));
  };

  // Remove item from cart
  const removeItem = product => {
    dispatch(cartActions.removeFromCart(product));
  };

  return (
    <section
      className='flex  
  items-center mx-auto  py-4  mb-8 w-5/6 
   justify-between mt-12 
   flex-col gap-4
  '
    >
      {product.map(products => (
        <div
          key={products.id}
          className='mx-auto  w-7/12 flex items-center justify-between 
      bg-regal-blue text-text-light  py-4 px-8 rounded-md '
        >
          <div className='  text-xl  font-semibold flex  flex-col  gap-8  '>
            <span>{products.item}</span>
            <span>X {products.quantity}</span>
          </div>
          <div className=' flex flex-col gap-8  '>
            <p className=' text-xl  font-semibold  mt-4'>
              ${products.price.toFixed(2)}{' '}
              <sup>perItem/{products.perItem}$</sup>{' '}
            </p>
            <div className=' flex  gap-4  justify-end'>
              <button
                className=' hover:bg-blue-light transition duration-300 ease-in-out text-regal-blue'
                onClick={() => addToCart(products)}
              >
                {' '}
                +
              </button>
              <button
                className='  text-lg  hover:bg-blue-light transition duration-300 ease-in-out text-regal-blue'
                onClick={() => removeItem(products)}
              >
                {' '}
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CartProducts;
