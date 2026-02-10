import { useState } from "react";

function Sidebar({ showMenu, setShowMenu }) {
  const [active, setActive] = useState("Home");

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
            className={active === item ? "active" : "inactive"}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
