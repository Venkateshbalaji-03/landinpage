function Cart({ cartItems, setShowCartPage }) {
  return (
    <div className="cart-page">
      <button onClick={() => setShowCartPage(false)}>
        ← Back to Products
      </button>

      <h2>Cart Items</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.img} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
