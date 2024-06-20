import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div style={{backgroundColor: '#323131'}}>
            <footer className="text-center text-lg-start text-white">
                <div className="p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    FashiON
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a className="text-white">Bootstrap</a>
                                </p>
                                <p>
                                    <a className="text-white">WordPress</a>
                                </p>
                                <p>
                                    <a className="text-white">BrandFlow</a>
                                </p>
                                <p>
                                    <a className="text-white">Bootstrap Angular</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                <p>
                                    <a className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a className="text-white">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a className="text-white">Help</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3" /> Mohammadpur, Dhaka - 1207, Bangladesh</p>
                                <p><i className="fas fa-envelope mr-3" /> jahidhasanmozumder@gmail.com</p>
                                <p><i className="fas fa-phone mr-3" /> +880 1537508951</p>
                                <p><i className="fas fa-print mr-3" /> +880 1783348759</p>
                            </div>
                        </div>
                    </section>
                    <hr className="my-3" />
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2024 Copyright:
                                    <a className="text-white" href="https://www.linkedin.com/in/zahid-hasan-mozumder/">Zahid Hasan Mozumder</a>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <a className="btn btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a className="btn btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className="btn btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon icon={faGoogle} /></a>
                                <a className="btn btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
