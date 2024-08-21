import React from "react";

export default function SidebarContainer () {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active p-3 mb-2 bg-danger text-white" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            Customers
          </a>
        </li>
      </ul>
      <div className="dropdown">
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}