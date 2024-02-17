
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./style.css"
import { Button, TextField } from "@mui/material";



const Footer = () => {
    const pages = ['News', 'Tournaments', 'Courses', 'Ebooks'];
    const contact = ['Privacy policies', 'Terms & Conditions', 'Contact Us'];


    return (
        <>
        <footer>
            <div className="footer">
                <div className="topFooter">
                    <Link to="/">
                        <img
                            src={logo}
                        />
                    </Link>
                    <div className="join">
                        <p>Join our</p>
                        <p>Newsetter</p>
                    </div>

                    <div className="subscribe">
                        <TextField
                            className="subInput"

                            multiline
                            maxRows={4}
                        />
                        <Button variant="contained" color="success">
                            subscribe
                        </Button>


                    </div>
                </div>
                <div className="bottomFooter">
                    <div className="leftside">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                        </p>
                        <p>
                            Follow us on
                        </p>
                        <div className="social">
                            <TwitterIcon /> <LinkedInIcon /> <InstagramIcon />
                        </div>

                    </div>
                    <div>

                        {pages.map((page) => (
                            <Link to="/">
                                <p>{page}</p>
                            </Link>
                        ))}

                    </div>

                    <div>

                        {contact.map((contact) => (
                            <Link to="/">
                                <p>{contact}</p>
                            </Link>
                        ))}

                    </div>

                </div>
            </div>
            <div className="ref">
            2024 LOGO. All Rights Reserved.
            </div>
            </footer>
            
        </>
    );
}

export default Footer;