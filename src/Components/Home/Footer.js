import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container mt-5">
                    {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* <!-- Section: Social media --> */}

                    {/* <!-- Section: Form --> */}
                    <section className="row">
                        <div className="col-md mb-4 text-center">
                            {/* <!-- Facebook --> */}
                            <a className="btn btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>

                            {/* <!-- Twitter --> */}
                            <a className="btn btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>

                            {/* <!-- Google --> */}
                            <a className="btn btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-google"></i
                            ></a>

                            {/* <!-- Instagram --> */}
                            <a className="btn btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-instagram"></i
                            ></a>

                            {/* <!-- Linkedin --> */}
                            <a className="btn btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>

                            {/* <!-- Github --> */}
                            <a className="btn btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-github"></i
                            ></a>
                        </div>
                        {/* <!-- Contact button --> */}
                        <div className="col-md text-center">
                        <button type="button" className="btn btn-primary btn-rounded w-50">Contact me</button>
                        </div>
                    </section>
                    {/* <!-- Section: Form --> */}

                    {/* <!-- Section: Text --> */}
                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                    {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4" style={{ background: "rgba(0, 0, 0, 0.05)" }}>
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mahbub-hasan.netlify.app/">mahbub-hasan.netlify.app</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
};

export default Footer;