import React from "react"
import {Row,Col} from "reactstrap"
import { Button, openWindow } from "./Snippets/snippets"
import "../components/Styles/homeStyles.css"
import EnterprenuerText from "../assets/images/enterpreneur.png"
import Rocket from "../assets/images/animation.gif"
import { useNavigate } from "react-router-dom";
const Home=()=>{
    let navigate = useNavigate();
    return(
       <div className="home">
            <Row className="m-0">
                
                <Col xl="7" lg="7" xs="12">

                    <Row className="m-0 mainSection" >
                        <Col xl="12" sm="12" >
                            <p className="homeText">
                                Get anything in {` `}
                           
                                <span style={{color:"#FF742E",position:"relative"}}>
                                    
                                    <span>minutes</span>                     
                                    <div className="underline1" style={{position:"absolute",top:"100%",left:"0%"}}></div>
                                </span>
                                
                            </p>
                        </Col>
                        <Col xl="12" style={{marginBottom:"3rem"}}>
                            <p className="homeText2">
                                Get anything on Dukkan from phones to clothes and receive it in less than 60 minutes 
                            </p>
                        </Col>
                        <Col xl="12" className="position-relative buttonWrapper">
                            {/* <div className="blurSpot"></div> */}
                            <Button style={{textAlign:"center"}} onClick={()=>navigate("/fundus")}>
                                Fund Us
                            </Button>
                        </Col>
                        <Col xl="5"  sm ="12" className="featuredSection">
                            <div className="homeText3">
                                Featured In
                            </div>
                            <div style={{cursor:"pointer",marginBottom:"20px"}} className="featuredTitle" onClick={()=>openWindow("enterprenuer")}>
                                <img src={EnterprenuerText}/>
                            </div>
                        </Col>
                    </Row>


                </Col>

                <Col xl="5" lg="5" className="d-xl-flex d-lg-flex justify-content-center  d-none">
                    <div>
                        <img src={Rocket} width="100%" />
                    </div>
                    
                </Col>
                
            </Row>
       </div>
    )
}
export default Home