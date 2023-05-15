const Cart = () => {
  return (
    <>
      {/* Cart products */}
      <section
        className='flex  
      items-center mx-auto  py-4  mb-8 w-5/6 
       justify-between mt-12 
      '
      >
        <div
          className='mx-auto  w-7/12 flex items-center justify-between 
         bg-regal-blue text-text-light  py-4 px-8 rounded-md '
        >
          <div className='  text-xl  font-semibold flex  flex-col  gap-8  '>
            <span>
              Item Mango <sup>perItem/6$</sup>{' '}
            </span>
            <span>
              X 3 <div className=' mt-4'>Total Price - $ 18</div>{' '}
            </span>
          </div>
          <div className=' flex flex-col gap-8'>
            <p className=' text-xl  font-semibold'> Lord of the Rings </p>
            <div className=' flex  gap-4  justify-end'>
              <button className=' hover:bg-blue-light transition duration-300 ease-in-out text-regal-blue'>
                {' '}
                +
              </button>
              <button className='  text-lg  hover:bg-blue-light transition duration-300 ease-in-out text-regal-blue'>
                {' '}
                -
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Items */}
      <article
        className='flex  
      items-center mx-auto  py-4  mb-8 w-5/6 
       justify-between mt-12   '
      >
        <div className=' bg-regal-blue text-text-light  py-8 px-8 rounded-md  mx-auto  w-7/12 '>
          {/* Items */}
          <div className=' flex items-center gap-8 '>
            <div className=' flex gap-4 flex-col  w-[83%]  '>
              <p className=' text-3xl'> Mango</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              </p>
            </div>
            <div className=' flex gap-4  justify-between'>
              <button className=' hover:bg-blue-light transition duration-300 ease-in-out text-regal-blue'>
                {' '}
                Add To Cart 🛒
              </button>
              {/* <button className='  text-lg  hover:bg-blue-light transition duration-300 ease-in-out text-regal-blue'>
                {' '}
                -
              </button> */}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Cart;
