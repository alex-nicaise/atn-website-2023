import { SocialIcon } from "react-social-icons";

const SocialIcons = ():React.JSX.Element => {
  return (
    <section id="social-icons">
        <SocialIcon
            href="https://www.github.com/alex-nicaise/"
            url="www.github.com"
            target="_blank" />
        <SocialIcon
            href="https://www.linkedin.com/in/alexander-nicaise/"
            url="www.linkedin.com"
            target="_blank" />
    </section>
  );
}

export default SocialIcons;