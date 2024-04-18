import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container navigation-content">
        <p className="company-logo">moja firma</p>
        <ul className="nav-items-list">
          <li className="nav-item">
            <a href="./components/Specialists/ListSection" className="nav-link">
              o nas
            </a>
          </li>
          <li className="nav-item">
            <a href="./components/BoxSection/BoxSection" className="nav-link">
              oferta
            </a>
          </li>
          <li className="nav-item nav-item-disabled">kontakt</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
