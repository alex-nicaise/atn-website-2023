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
      alert(`Email could not be copied: ${err}`)
    }
  }

  return (
    <header>
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