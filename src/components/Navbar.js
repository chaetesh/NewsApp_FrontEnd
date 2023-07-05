import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            NewsApp
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Districts
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="krishna">
                      Krishna
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="guntur">
                      Guntur
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="eluru">
                      Eluru
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link class="btn btn-outline-success" type="submit" to="/admin">
                Login as Admin
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
