import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default () => (
    <React.Fragment>
        <Navbar/> 
        <div className={styles.home}>
            <h1>Home</h1>
        </div>
        <Footer/>
    </React.Fragment>
)