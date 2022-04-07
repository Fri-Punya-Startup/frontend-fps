import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Styles from "../styles/home/styles.module.css"

export default () => (
    <React.Fragment>
        <Navbar/> 
        <div className={Styles.home}>
            <h1>Home</h1>
        </div>
        <Footer/>
    </React.Fragment>
)