function Header({ setShowMenu, cartCount, setShowCartPage }) {
  return (
    <header className="header">
      <div className="logo">
        <span className="menu-icon" onClick={() => setShowMenu(true)}>
          ☰
        </span>
        <h3>MyShop</h3>
      </div>

      <div className="header-right">
        <div
          className="cart-wrapper"
          onClick={() => setShowCartPage(true)}
        >
          🛒

          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
