import React, { useState, useEffect } from 'react'
import "./Nav.css"

export default function Nav() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            alt="Netflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            className="nav__logo"
            onClick={() => window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://i.pinimg.com/736x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
            className="nav__avatar"
        />
    </nav>
  );
}
