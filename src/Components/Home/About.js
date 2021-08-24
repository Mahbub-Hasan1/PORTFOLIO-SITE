import { Container } from '@material-ui/core';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DialerSipIcon from '@material-ui/icons/DialerSip';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import SecurityIcon from '@material-ui/icons/Security';
import React from 'react';

const About = () => {
    return (
        <div className="about_area">
            <Container maxWidth="md" className="about-compo_contents card">
                <div className="text-center about_hade">
                    <h3>hi.</h3>
                    {/* <hr /> */}
                    <div className="card-body pt-2 pb-5">
                        <h2>
                            <span>I&apos;m </span>Munir Uddin Mahbub
                        </h2>
                        <h5 className="card-title">Professional Full-Stack Web Developer</h5>
                        <p className="card-text">
                            I&apos;m a reliable goal-driven person and I want everything to be in
                            order. I am responsible and initiative team-member, result-oriented. I
                            have the ability to solve complex problems. My target is the
                            client&apos;s full satisfaction and doing the best to deliver the most
                            efficient and highest quality projects.
                        </p>
                    </div>
                </div>

                {/* ------------------------------------------ */}
                <div className="welcome_compo_cards">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card h-100 a_card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <HighQualityIcon className="icon" /> Quality
                                    </h5>
                                    <p className="card-text">
                                        Design Quality is very important for every website, I make
                                        sure 100% quality & satisfaction before delivering the
                                        project.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 b_card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <DeveloperModeIcon className="icon" /> Integrity
                                    </h5>
                                    <p className="card-text">
                                        Friendly coding and design professionality increase website
                                        speed and SEO result, only experienced person can make sure
                                        this.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 c_card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <SecurityIcon className="icon" /> Security & Safety
                                    </h5>
                                    <p className="card-text">
                                        Get complete security website and safe your all data and
                                        information.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 d_card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <DialerSipIcon className="icon" /> Support
                                    </h5>
                                    <p className="card-text">
                                        Get life time working relationship & support with full
                                        instructions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/" className="btn btn-primary btn-rounded w-100 mt-3">
                    Contact me
                </a>
            </Container>
        </div>
    );
};

export default About;
