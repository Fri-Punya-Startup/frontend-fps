
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Styles from "../styles/footer/styles.module.css"

export default function Footer(){
    return (
        <React.Fragment>
            <div className={Styles.footer}>
                <div className={Styles.containerFooter}>
                    <Container fluid>
                        <Row>
                            <Col xs={6} className={Styles.ready}>
                                <h1>Ready to improve your Startup?</h1>
                                <h5>Let's join us!</h5>
                            </Col>
                            <Col xs={6} >
                                <div className={Styles.register}>
                                    <h5>Register Now!</h5>
                                </div>
                            </Col>
                        </Row> 
                    </Container>
                </div>
                <div className={Styles.contact}>
                    <Image src="/images/footer/fps-white.svg" width={120} height={120} />
                    <h4 className={Styles.ijo}>FRI Punya Startup</h4>
                    <h4>Bandung</h4>
                    <h4>Fakultas Rekayasa Industri</h4>
                    <h4>Telkom University</h4>
                    <br/>
                    <div className={Styles.contactInfo}>
                        <Link href={"#"} >
                            <a>
                                <Image className={Styles.medsos} src="/images/footer/discord.svg" width={60} height={60}/>
                            </a>
                        </Link>
                        <Link href={"#"} >
                            <a>
                                <Image className={Styles.medsos} src="/images/footer/instagram.svg" width={60} height={60}/>
                            </a>
                        </Link>
                        <Link href={"#"} >
                            <a>
                                <Image className={Styles.medsos} src="/images/footer/facebook.svg" width={60} height={60}/>
                            </a>
                        </Link>
                        <Link href={"#"} >
                            <a>
                                <Image className={Styles.medsos} src="/images/footer/linkedin.svg" width={60} height={60}/>
                            </a>
                        </Link>
                    </div>
                    <br/>
                    <h4>Copyright FPS Telkom, All Right Reserved</h4>
                </div>
            </div>
        </React.Fragment>
    )       
}