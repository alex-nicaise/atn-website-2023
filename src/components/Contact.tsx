import { Tooltip } from "@mui/material";

const Contact = ():React.JSX.Element => {

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
        <>
            <h1>Contact Me</h1>

            <Tooltip title="Copy Email" placement="top" arrow>
                <p onClick={handleEmailClick}>
                    Feel free to email me here!
                </p>
            </Tooltip>
        </>
    );
}

export default Contact;