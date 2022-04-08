import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Styles from "../Styles/contact/contact.module.css";
import {Container, Row, Col} from "reactstrap";

export default function Contact(){
    return (
        <React.Fragment>
            <Navbar />
                {/* <Container> */}
                    <div className={Styles.header}>
                        <div className={Styles.container}>
                        <h1>Contact Us</h1>     
                        </div>
                    </div>
                    <div className={Styles.contact}>
                        <div className={Styles.box}>
                        <Row>
                            <Col sm={6}>
                                <h5>Get In Touch</h5>
                                <br /><br />
                                <h2>fps.telkom@gmail.com</h2>
                                <h3>+62 00 000 000 000</h3>
                                <br /><br />
                                <h5>Fakultas rekayasa Industri</h5>
                                <br />
                                <h5 className={Styles.h5}>Telkom University</h5>
                                <h5 className={Styles.h5}>Jalan Telekomunikasi No 1</h5>
                                <h5 className={Styles.h5}>Bandung</h5>
                            </Col>
                            <Col sm={6}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.0157255718684!2d110.47951768586385!3d-7.005579459519159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d0f1f39f9b3%3A0xb0bc844d20b004b6!2sMushola%20MWC%20NU%20Pedurungan!5e0!3m2!1sid!2sid!4v1649361199277!5m2!1sid!2sid" width={600} height={450} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                            </Col>
                        </Row>
                        </div>
                    </div>
                {/* </Container> */}
            <Footer />
        </React.Fragment>
    )
}