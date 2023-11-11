import Logo from "/nicaise-logo-LARGE-V2.png";
import { Link } from "react-router-dom";

const Header = (): React.JSX.Element => {
  return (
    <header>
      {/* META TAGS */}
      <meta name="og:title" content="Alex Nicaise Portfolio Website"/>
      <meta name="og:image" content="/nicaise-logo-LARGE-V2.png"/>
      <meta name="author" content="Alexander Nicaise"/>
      <meta name="language" content="english"/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="HandheldFriendly" content="true"/>
      <meta name="format-detection" content="telephone=yes"/>
      <meta name="copyright" content="Copyright 2023"></meta>
      <meta name="robots" content="index,follow" />

      <img src={Logo} alt="Alex Nicaise Logo"/>

      <div>
        <Link to="/">Resume</Link>
        <button>Contact Me</button>
      </div>
    </header>
  )
}

export default Header;