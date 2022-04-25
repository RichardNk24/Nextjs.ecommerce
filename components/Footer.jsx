import React from "react";
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"; 

const Footer = () => {
    return (
        <div className="footer-container">
            <p>2022 Richard Nkulu, All rights reserved </p>
            <p className="icons">
                <AiFillInstagram className="social" />
                <AiOutlineTwitter className="social" />
                <AiOutlineGithub className="social" />
                <AiOutlineLinkedin className="social" />
            </p>
        </div>
    )
}

export default Footer