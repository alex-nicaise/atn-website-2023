import React from 'react';
import Logo from "/nicaise-logo-LARGE-V2.png";

const Header = (): React.JSX.Element => {
  return (
    <div id="header">
        <img src={Logo} alt="Alex Nicaise Logo"/>
    </div>
  )
}

export default Header;