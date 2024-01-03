import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <>
    <header className="header">
    <nav className="bg-white border-blue-400 px-4 lg:px-6 py-2.5">
    <div className="flex flex-wrap justify-between items-center mx-auto mx-w-screen-xl">
    <div className="logo">
    logo
    </div>
    <div className="navmid">
    <button className="navlnks">Home</button>
    <button className="navlnks">Home</button>
    <button className="navlnks">Home</button>
    <button className="navlnks">Home</button>

    </div>
    <div className="buttons">
    <button className="login">
      log in
    </button>
    <button className="getstarted">Get Started</button>
    </div>
    </div>
    </nav>
    </header>
    </>
  );
}
