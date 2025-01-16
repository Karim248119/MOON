import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full text-xs uppercase border-t border-secondary text-white/50 p-8 flex justify-between items-center absolute bottom-0 left-0">
      <p>
        MOON . Registered 2022 <br />
        All rights reserved
      </p>
      <div className="flex flex-col">
        <a href="#">Drlivery</a>
        <a href="#">contacts</a>
      </div>
      <Logo />
      <div className="flex flex-col">
        <a href="#">About us</a>
        <a href="#">Terms & Conditions</a>
      </div>
      <div className="flex flex-col">
        <a href="#">Privacy policy</a>
        <a href="#">Cookies</a>
      </div>
    </footer>
  );
}
