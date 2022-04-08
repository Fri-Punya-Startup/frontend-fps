import React from "react"
import Link from 'next/link'
import Styles from '../styles/navbar/navbar2.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "reactstrap";

export default function Navbar(){
    return ( 
        <React.Fragment>
        <div className={Styles.header}>
          <nav className={Styles.navbar}>
            <Row>
              <Col sm={4}>
                <div className={Styles.logo}>
                  <Image src="/images/logoNavbar.svg" width={400} height={100} />
                </div>
              </Col>
              <Col sm={8}>
                <div className={Styles.lili}>
                    <ul className={Styles.navmenu}>
                      <li className={Styles.navitem}>
                        <Link href="/"><a className={Styles.navlink}>Home</a></Link>
                      </li>
                      <li className={Styles.navitem}>                 
                        <Link href="/"><a className={Styles.navlink}>About us</a></Link>         
                      </li>
                      <li className={Styles.navitem}>              
                        <Link href="/"><a className={Styles.navlink}>Our Portfolio</a></Link>          
                      </li>
                      <li className={Styles.navitem}>
                        <Link href="/"><a className={Styles.navlink}>Our Team</a></Link>
                      </li>
                      <li className={Styles.navitem}>
                        <Link href="/"><p className={Styles.button}>Register</p></Link>
                      </li>
                      <li className={Styles.navitem}>
                      <Link href="/"><p className={Styles.button2}>Contact Us</p></Link>
                      </li>
                    </ul>
                  </div>
                <button className={Styles.hamburger}>
                  <span className={Styles.bar}></span>
                  <span className={Styles.bar}></span>
                  <span className={Styles.bar}></span>
                </button>
              </Col>
            </Row>
          </nav>
        </div>
      </React.Fragment>
    )       
}