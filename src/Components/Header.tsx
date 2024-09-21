import { useState } from "react";
import Logo from "./../assets/svg/my-logo-no-background.svg"
const HeaderComponent = () => {
    const [showNav, setShowNav] = useState(false)
  return <> <header className="navigation-header">
  <nav>
      <div className="logo-container">
          <a href=""><img src={Logo} alt="Nsikak Logo" /></a>
      </div>
      <div className="navigation-items" id="navigation-items" style={{display: showNav ? "flex": "none"}}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#connect">Contact Me</a>
      </div>
      <div className="hamburger">
          <span id="openHam" style={{display: !showNav ? "block": "none"}} onClick={() => setShowNav(true)}>&#9776;</span>
          <span id="closeHam" style={{display: showNav ? "block": "none"}} onClick={() => setShowNav(false)}>&#x2716;</span>
      </div>
  </nav>
 </header>
    </>;
};

export default HeaderComponent;
