import { Container } from '@material-ui/core';
import React from 'react';

const processData = [
    {
        id: 1,
        title: "Discussion",
        icon: "https://i.imgur.com/uM0GXfS.png",
        description: "To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations."
    },
    {
        id: 2,
        title: "Planning",
        icon: "https://i.imgur.com/CMNwwHO.png",
        description: "Then I can create a plan for the interior projects. Planning gives high potential to every projects. Every single detail listed in the plan, when I deliver, when I need website data form you."
    },{
        id: 1,
        title: "Design",
        icon: "https://i.imgur.com/OG8MS7b.png",
        description: "I give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website. A nice design can improve your business quality."
    },
    {
        id: 2,
        title: "Coding",
        icon: "https://i.imgur.com/tNQM8Eg.png",
        description: "The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them."
    },
    {
        id: 2,
        title: "Submit for Review",
        icon: "https://i.imgur.com/f5SQSwz.png",
        description: "After design and coding, I send for review to client. After client’s checking, If have to change or revision, I say client to send all of them in a list and I am happy to do all changes every time."
    },
    {
        id: 2,
        title: "Website Is Ready!",
        icon: "https://i.imgur.com/E4mr51o.png",
        description: "After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. In every project, i make sure to give full support to the clients."
    },
]

const Process = () => {
    return (
        <div id="process_area">
            <div id="processTitle">
                <h5>Process</h5>
                <h2>How i do work?</h2>
            </div>
            <Container maxWidth="lg">
                <div className="row justify-content-center">
                    {processData.map((data, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6" key={index}>
                            <div className="card mt-4">
                                <div className="face face1">
                                    <div className="content">
                                        <span className="stars"></span>
                                        <img src={data.icon} alt="" />
                                        <h2 className="java">{data.title}</h2>
                                        <p className="java">{data.description}</p>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <h2>0{index + 1}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Process;