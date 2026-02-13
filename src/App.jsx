import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCartPage, setShowCartPage] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  // add product
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <>
      <Header
        setShowMenu={setShowMenu}
        cartCount={cartItems.length}
        setShowCartPage={setShowCartPage}
      />

      <div className="container">
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          cartItems={cartItems}
        />

        <main className="main">
          {showCartPage ? (
            <Cart
              cartItems={cartItems}
              setShowCartPage={setShowCartPage}
            />
          ) : (
            <>
              <h2 className="page-title">Products</h2>
              <Products addToCart={addToCart} />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
