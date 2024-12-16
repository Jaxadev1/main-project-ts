import React from "react";
import Logo from "../../public/Logo.webp";
import SearchIcon from "../assets/icons/SearchIcon";

const Header: React.FC = () => {
  return (
    <header>
      <div className="additional">
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <img className="header-logo-item" src={Logo} alt="Logo" />
              <h1 className="header-logo-title">
                <span className="header-logo-title-adnl">B</span>yte
                <span className="header-logo-title-adnl">E</span>at
              </h1>
            </div>
            <div className="header-search">
              <input
                className="header-search-item"
                type="search"
                placeholder="search"
              />{" "}
              <span className="header-search-icon">
                <SearchIcon />
              </span>{" "}
            </div>
            <div className="header-context">
              <div className="header-context-item">MENU</div>
              <div className="header-context-item">CONTACTS</div>
              <div className="header-context-item">LOCATION</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header-main-background">
        <div className="container">
          <div className="header-main">
            <p className="header-main-text">
              The flavors of life are just a bite away
            </p>
            <h2 className="header-main-title">Flavors for royalty</h2>
            <button className="header-main-btn">Learn more </button>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
