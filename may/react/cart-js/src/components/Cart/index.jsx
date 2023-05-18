import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/store';
import CartProducts from './cartProducts';

const DUMMY_ITEM = [
  {
    id: 1,
    item: 'Mango',
    price: 6.0,
    perItem: 6.0,
    description: `Rich in vitamins A and C, which support immune function and promote healthy skin.
    Contain dietary fiber, aiding digestion and promoting feelings of fullness.`,
  },
  {
    id: 2,
    item: 'Banana',
    price: 8.02,
    perItem: 8.02,
    description: `High in potassium, which is crucial for maintaining proper heart and muscle function.
    Provide essential vitamins and minerals like vitamin C, vitamin B6, and magnesium.
    Contain dietary fiber, promoting healthy digestion and preventing constipation.`,
  },
  {
    id: 3,
    item: 'Grapes',
    price: 3.57,
    perItem: 3.57,
    description: `Packed with antioxidants that protect against oxidative stress and reduce inflammation.
    Contain resveratrol, which may promote heart health and reduce the risk of cardiovascular diseases.`,
  },
  {
    id: 4,
    item: 'Pomegranate',
    price: 5.3,
    perItem: 5.3,
    description:
      'Rich in antioxidants, which help protect against free radicals and reduce inflammation. ',
  },
];

const Cart = () => {
  const dispatch = useDispatch();

  // Add item to cart (store)
  const addToCart = product => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <>
      {/* Cart products */}
      <CartProducts />

      {/* Cart Items */}
      <article
        className='flex  
      items-center mx-auto  py-4  mb-8 w-5/6 
       justify-between mt-12  flex-col   '
      >
        {DUMMY_ITEM.map(product => (
          <div
            key={product.id}
            className=' bg-regal-blue text-text-light  py-8 px-8 rounded-md  mx-auto  w-7/12  mt-1 '
          >
            {/* Items */}
            <div className=' flex items-center gap-8 '>
              <div className=' flex gap-4 flex-col  w-[83%]  '>
                <p className=' text-3xl'> {product.item} </p>
                <p className=' leading-7'>{product.description}</p>
              </div>
              <div className=' flex gap-4 justify-between'>
                <div className=' flex  flex-col gap-4'>
                  <p className=' font-semibold text-lg '>
                    Price - ${product.price.toFixed(2)}
                  </p>
                  <button
                    className=' hover:bg-blue-light transition duration-300 ease-in-out text-regal-blue'
                    onClick={() => addToCart(product)}
                  >
                    {' '}
                    Add To Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default Cart;
