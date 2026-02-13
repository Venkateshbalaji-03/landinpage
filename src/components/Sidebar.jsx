import { useState } from "react";

function Sidebar({ showMenu, setShowMenu, cartItems }) {
  const [active, setActive] = useState("Products");

  const menu = ["Products", "Orders", "Cart"];

  return (
    <aside className={`sidebar ${showMenu ? "show" : ""}`}>
      <div className="sidebar-header">
        <h3>Menu</h3>
        <span className="close-btn" onClick={() => setShowMenu(false)}>
          ✖
        </span>
      </div>

      <ul>
        {menu.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {active === "Cart" && (
        <div className="sidebar-cart">
          <h4>Cart Items</h4>

          {cartItems.length === 0 ? (
            <p>No items</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} width="40" />
                <p>{item.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
