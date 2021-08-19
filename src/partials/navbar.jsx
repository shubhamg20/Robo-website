import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-nav">
      <div class="container">
        <div class="brand">
          <a class="navbar-brand " href="/">
            <img
              class="img"
              src="https://roboticsclubiitk.github.io/assets/images/logo.png"
              alt=""
            />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" navbar-collapse collapse ">
          <ul class="navbar-nav margin " id=" navbarTogglerDemo03">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/team">
                team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                about
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
