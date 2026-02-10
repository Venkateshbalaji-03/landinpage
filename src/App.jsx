import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0); 

  return (
    <>
      <Header setShowMenu={setShowMenu} cartCount={cartCount} />
      <div className="container">
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
        <main className="main">
          <h2 className="page-title">Products</h2>
          <Products setCartCount={setCartCount} />
        </main>
      </div>
    </>
  );
}

export default App;
