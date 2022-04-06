import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Styles from "../styles/home/styles.module.css"
import Link from "next/link"
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

const activityItem = 200;

export default () => (
    <React.Fragment>
        <Navbar/> 
        <div className={Styles.home}>
            <div className={Styles.container}>
                <h1>Learn, Discuss</h1>
                <h1>Improve and</h1>
                <h1>Implement !</h1>
                <br/>
                <h4>We are FPS, we are a Family</h4>
                <br/>
                <h5>Let's join us and improve your startup with Us  !</h5>
                <br/>
                <div className={Styles.register}>
                    <div className={`${Styles.student} ${Styles.a}`}>
                        <h6>Register as Student</h6>
                    </div>
                    <Link href={"/google"}>
                        <a className={`${Styles.alumni} ${Styles.a}`}>
                            <h6>Register as Alumni</h6>
                        </a>
                    </Link>
                </div>
                <div className={Styles.activity}>
                    <Row>
                        <Col xs={4}>
                            <div className={Styles.activityItem}>
                                <Image src={"/images/home/activity/competion.svg"} width={activityItem} height={activityItem} />
                                <h5>Competion</h5>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className={Styles.activityItem}>
                                <Image src={"/images/home/activity/comunity.svg"} width={activityItem} height={activityItem} />
                                <h5>Comunity</h5>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className={Styles.activityItem}>
                                <Image src={"/images/home/activity/bootcamp.svg"} width={activityItem} height={activityItem} />
                                <h5>Bootcamp</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={Styles.aboutUs}>
                   <Container fluid>
                   <Row>
                        <Col xs={4}>
                            <Image src={'/images/home/about.svg'} width={300} height={300} />
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={7}>
                            <h2><span>|</span> About Us</h2>
                            <h5>
                                FPS merupakan sebuah komunitas yang dibentuk dengan tujuan berkembang dan belajar bersama 
                                dalam menciptakan sebuah ide bisnis atau startup. Anggota dapat menjalin relasi sesama 
                                anggota maupun alumni dan berkembang bersama untuk menciptakan karya - karya unggulan di 
                                bawah naungan Fakultas Rekayasa Industri. FPS menjadi sarana untuk mahasiswa FRI 
                                (Fakultas Rekayasa Industri) dalam penciptaan sebuah inovasi,karya atau ide bisnis.
                            </h5>
                        </Col>
                    </Row>
                   </Container>
                </div>
                <div className={Styles.ourActivity}>
                    <h2><span>|</span> Our Activity</h2>
                </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
)