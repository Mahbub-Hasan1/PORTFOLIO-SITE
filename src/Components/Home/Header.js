import { Container } from '@material-ui/core';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import Typical from 'react-typical';

const Header = () => {
    return (
        <div className="header_area">
            <Container maxWidth="lg">
                <div className="row align-items-center">
                    <div className="col-md header_about_me">
                        <Typical
                            steps={[
                                'Full MERN-Stack Web Developer',
                                1000,
                                'Munir Uddin Mahbub.',
                                500,
                                'Front End Developer.',
                                500,
                                'Back End Developer.',
                                500,
                                'React Native Developer.',
                                500,
                                'App Developer.',
                                500,
                            ]}
                            loop={Infinity}
                            wrapper="h2"
                        />
                        <p>
                            Web Design & Development is my passion, I get deeper to understand
                            client&apos;s need & problems. My mission is to satisfy every client and
                            become myself a pro developer to learn new updates every day.
                            You&apos;ll get lifetime support in any situation, I Premise that,
                            You&apos;ll get Fanatical Support and Absolutely Positively On-time
                            Delivery.
                        </p>
                        <div>
                            <a href="/">
                                <LinkedInIcon className="icon" />
                            </a>
                            <a href="/">
                                <GitHubIcon className="icon" />
                            </a>
                            <a href="mailto:mahbub.hasan9000@gmail.com">
                                <EmailIcon className="icon" />
                            </a>
                            <a href="/">
                                <AddIcCallIcon className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md">
                        <img className="img-fluid" src="https://i.imgur.com/L6iS7lh.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
