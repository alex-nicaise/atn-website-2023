import { Tooltip } from "@mui/material";
import Logo from "/nicaise-logo-LARGE-V2.png";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Header = (): React.JSX.Element => {

  const handleEmailClick = async () => {
    const myEmail = "atnicais@gmail.com";

    try{
      await navigator.clipboard.writeText(myEmail);
      alert("Copied Email!")
    } catch (err) {
      alert(`Email could not be coppied: ${err}`)
    }
  }

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


      <nav>
        <Link to="/">Resume</Link>
        <Tooltip title="Copy Email" placement="top" arrow>
          <button onClick={handleEmailClick}>Contact Me</button>
        </Tooltip>
        <SocialIcons/>
      </nav>

    </header>
  )
}

export default Header;