import { Container } from '@material-ui/core';
import React from 'react';

const servicesData = [
    {
        title: "Full website creation",
        description: "I can create any type of website for your business, portfolio, company, e-commerce store, blog etc. I provide unique, clean & awesome graphical design interface.",
        img: "https://i.imgur.com/yB9eGOZ.png"
    },
    {
        title: "Online store & shopping",
        description: "I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website.",
        img: "https://i.imgur.com/LIKFjHn.png"
    },
    {
        title: "Fixing problems",
        description: "Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.",
        img: "https://i.imgur.com/OiMfqCN.png"
    },
    {
        title: "Maintenance & Optimized",
        description: "Slow loading website it’s the biggest problem for every website. I can boost your website’s speed by optimization your website. And if you don’t have time to maintain your website don’t worry I’m here.",
        img: "https://i.imgur.com/DGyFq8h.png"
    },
]

const Services = () => {
    return (
        <div className="services_c_area">
            <div className="services_c_area_title">
                <h1>Services</h1>
                <h2>What I do</h2>
                <hr />
            </div>
            <Container maxWidth="lg" className="services_c_content">

                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
                    {
                        servicesData.map((data, index) => (
                            <div key={index} className="col">
                                <div className="card mb-3 h-100">
                                    <div className="card-header">
                                        <img className="img-fluid" src={data.img} alt="-" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">
                                            {data.description}
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                    <button type="button" className="btn btn-light w-100" data-mdb-ripple-color="dark">Light</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </Container>
        </div>
    );
};

export default Services;