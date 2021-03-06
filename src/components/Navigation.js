import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navigation = () => {
  const token = localStorage.getItem("x-auth-token");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (token !== null || token !== undefined) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Container fluid className="nav-bar">
      <Row className="navigation-title">
        <Col>
          <h1 className="nav-title text-warning">barefoot NOMAD</h1>
        </Col>
        <Col>
          <ul className="center-ele">
            <form>
              <select className="lang-form">
                <option value="english">English</option>
                <option value="kinyarwanda">Kinyarwanda</option>
                <option value="français">Français</option>
              </select>
            </form>
          </ul>
        </Col>
      </Row>

      <nav className="navbar navbar-expand-lg navbar-light custom-nav">
        <Link className="navbar-brand mr-5" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-5">
            <li className="nav-item active">
              <Link className="nav-link text-warning ml-4" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning ml-4" to="/">
                Travel&nbsp;Tips
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning ml-4" to="/login">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning ml-4" to="/signup">
                Sign&nbsp;Up
              </Link>
            </li>
            <li className="nav-item text-warning">
              <Link className="nav-link text-warning ml-4" to="/">
                Services
              </Link>
            </li>

            {showButton && (
              <li className="nav-item">
                <Dropdown
                  className="accomodation-dropdown"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                >
                  <DropdownToggle className="dropdown-togle" caret>
                    Accommodation
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="dropdown-item">
                      <Link
                        className="nav-link text-warning ml-4"
                        to="/accommodation"
                      >
                        Add&nbsp; Accommodation
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        className="nav-link text-warning ml-4"
                        to="/accommodation/view"
                      >
                        View&nbsp; Accommodation
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link text-warning ml-4" to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning ml-4" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning ml-4" to="/">
                <button className="book-btn">Book&nbsp;now</button>
              </Link>
            </li>
            <input
              type="search"
              placeholder="&#xf002;"
              className="search-input"
            />
          </ul>
        </div>
      </nav>
    </Container>
  );
};
export default Navigation;
