import React from "react"
import {Row,Col} from "reactstrap"
import { Button, openWindow } from "./Snippets/snippets"
import "./Styles/fundUsTopSection.css"
import EnterprenuerText from "../assets/images/enterpreneur.png"
import Rocket from "../assets/Frame.png"
import { useNavigate } from "react-router-dom";
const FundUsTopSection=()=>{
    let navigate = useNavigate();
    return(
       <div className="home3">
            <Row className="m-0 reverseorder">
                
                <Col xl="6" lg="7" xs="12" >

                    <Row className="m-0 " >
                        <Col xl="12" sm="12" >
                            <p className="headingText">
                            If you'd like to hold equity in Dukkan, you can contact our team for details on our equity fundraise.
                           
                                <span style={{color:"#FF742E",position:"relative"}}>
                                    
                                    <span> Minimum investment size is 10,000 AED</span>                     
                                          </span>
                                
                            </p>
                        </Col>
                    
                     
                    
                    </Row>


                </Col>

                <Col xl="5" lg="5" className="d-xl-flex d-lg-flex justify-content-center align-items-center ">
                    <div>
                        <img src={Rocket} width="100%" />
                    </div>
                    
                </Col>
                
            </Row>
       </div>
    )
}
export default FundUsTopSection