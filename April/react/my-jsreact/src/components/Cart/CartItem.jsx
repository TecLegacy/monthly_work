import modules from './cart.module.css';

const CartItem = () => {
  return (
    <>
      <div className={modules.bg}>
        <div className={modules.items}>
          <h3>Cart Items</h3>
          <div>
            <span>Item </span>
            <span>Price $ 6.00</span>
          </div>
          <div>
            <p>About Item</p>
          </div>
          <button className={modules.buttonEnd}>Add to Cart!</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
