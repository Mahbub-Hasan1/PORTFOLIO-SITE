import { Container } from '@material-ui/core';
import React from 'react';

const projectData = [
    {
        name: "ottawareno.net",
        link: "-",
        description: "-------",
        img: "https://i.imgur.com/7UCsayI.jpg"
    },
    {
        name: "ottawareno.net",
        link: "-",
        description: "-------",
        img: "https://i.imgur.com/4kvHioa.jpg"
    },
    {
        name: "ottawareno.net",
        link: "-",
        description: "-------",
        img: "https://i.imgur.com/EdyZ933.jpg"
    }
]

const Portfolio = () => {
    return (
        <div className="portfolio_area">
            <div className="portfolio_c_area_title">
                <h1>PORTFOLIO</h1>
                <h2>Discover My Latest Works</h2>
                <hr />
            </div>
            <Container>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 align-items-center justify-content-center">
                    {projectData.map((data, index) => (
                        <div key={index} className="col">
                            <div class="card">
                                <img src={data.img} />
                                {/* hello */}
                                <div class="descriptions">
                                    <div class="text-center">
                                        <div class="card-header">Featured</div>
                                        <div class="card-body">
                                            <h5 class="card-title">Special title treatment</h5>
                                            <p class="card-text">
                                                With supporting text below as a natural lead-in to additional content.
                                            </p>
                                            <a href="#" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Go somewhere</a>
                                        </div>
                                        <div class="card-footer text-muted">2 days ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;