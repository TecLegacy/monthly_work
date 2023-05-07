import modules from './cart.module.css';
import CartDispatch from './cart_dispatch/CartDispatch';

const CartItem = () => {
  const itemsBox = [
    {
      item: 'Mongo',
      quantity: 1,
      price: 6.0,
      description: 'Lorem ipsum dolor',
    },
    {
      item: 'Banana',
      quantity: 1,
      price: 4.0,
      description: 'Lorem Banana ipsum dolor',
    },
  ];

  return (
    <>
      <div className={modules.bg}>
        <h3 className={modules.heading}>Cart Items</h3>
        {itemsBox.map((item, i) => (
          <CartDispatch
            item={item.item}
            price={item.price}
            description={item.description}
            quantity={item.quantity}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default CartItem;
