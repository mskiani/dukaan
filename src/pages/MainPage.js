import React from "react"
import NavBar from "../components/NavBar"
import {Row} from "reactstrap"
import Home from "../components/Home"
import SecondSection from "../components/SecondSection"
import AboutUs from "../components/AboutUs"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const MainPage=()=>{

    return(
        <div style={{position:"relative",width:"100%"}}>
            <div style={{position:'sticky',top:"0%",width:'100%',zIndex:'2'}}>
                <NavBar/>
            </div>
            <div id="home">
                <Home/>
            </div>
            <div id="fundUs">
                <SecondSection/>
            </div>
            <div id="aboutUs">
                <AboutUs/>
            </div>
            <div id="contactUs">
                <ContactUs/>
            </div>
            <div id="footer">
                <Footer/>
            </div>
            <div className="row m-0">
                <div style={{width:"100%",height:"1px",background:"rgba(80, 88, 101, 1)"}}></div>
            </div>
            <div style={{background:"black"}}>
                <div className="p-5 lastDiv">
                        
                        Copyright 2022 © Dukaan

                </div>
            </div>
        </div>
    )
}
export default MainPage