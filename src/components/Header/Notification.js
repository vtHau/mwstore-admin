import React from "react";
import { ShoppingBag, Download, AlertCircle } from "react-feather";

function Notification() {
  return (
    <ul className="notification-dropdown onhover-show-div p-0">
      <li>Notification</li>
      <ul className="noti-list">
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
        <li>
          <div className="media">
            <AlertCircle />
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
          </div>
        </li>
      </ul>
      <li className="txt-dark text-center">
        <a href="# " className="text-center">
          All notification
        </a>
      </li>
    </ul>
  );
}

export default Notification;
