import SocialIcons from "./SocialIcons";

const Footer = (): React.JSX.Element => {
  return (
    <footer>
        <SocialIcons />
        <p>Alexander Nicaise © {new Date().getFullYear()} · All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;