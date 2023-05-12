const Cart = () => {
  return (
    <>
      {/* Cart Items */}
      {/* Cart products */}
      <section
        className='  flex  
      items-center mx-auto  py-4  mb-8 w-5/6'
      >
        <div className=''>
          <h2>Cart Products</h2>
          <span> Price 18$ </span>
        </div>
        <div>
          <p> lord of the rings </p>
          <div>
            <button> +</button>
            <button> -</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
