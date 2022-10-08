import React from "react"
import "../components/Styles/contactUs.css"
import invest from "../assets/images/investment.png"
import govt from "../assets/images/govt.png"
import finance from "../assets/images/finance.png"
import { Button } from "./Snippets/snippets"

import Twitter from "../assets/images/Twitter.png"
import Facebook from "../assets/images/fb.png"
import Youtube from "../assets/images/youtube.png"
import Instagram from "../assets/images/instagram.png"
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
// import { Facebook, Instagram, Twitter} from "react-feather"

const ContactUsSectioinFundUsPage=()=>{


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      
      const toastifySuccess = () => {
        console.log("showing toast")
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };
    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        
console.log("hello"+name + email + message)
        try {
          const templateParams = {
            name,
            email,
            message
          };
    
          await emailjs.send(
            "service_9qasc2r",
            "template_djlhcgy",
            templateParams,
         "BLC6prPD2L4v_uR_9"
          );
    
          reset();
          
      toastifySuccess();
      
        } catch (e) {
          console.log(e);
        }
      };

      const Hello =()=>{

console.log("hello")
      };
    
    return(
        <div className="contactUs2">
            <div className="row m-0" style={{width:"90%" , overflow: "hidden"}}>

                <div className="col-12 d-xl-block d-lg-block d-md-flex flex-md-column justify-content-center align-items-center  aboutSectionHeading">
               
                    
                </div>

                <div className="col-12 d-flex justify-content-center">

                    <div className="contact-form">
                     
                            <div>
                                
                                <p className="firstPointPara mt-5 text-center">
                                    Get In Touch
                                    <div style={{width: "179.3549041748047px",background: "#FFFFFF",height:" 1.9490195512771606px",margin:'auto'}}></div>
                                </p>
                                

                            </div>
                        <div className="d-flex justify-content-center">
                            <div style={{width:"80%"}}>
                                <div className="d-flex align-items-end" style={{height:"80px"}}>
                                    <p className="firstPointParafund" >Submit Form Below Our team will 
contact you </p>
                                </div>
                                <div className="row m-0 forminfundus" >

                                    <div className="col-md-6" style={{padding:"30px 0px"}}>
                                    <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                                    <input className="contact_inputs" placeholder="Full Name"  name="name" type="text"   {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })} />
                         {errors.name && <span className='errorMessage'>{errors.name.message}</span>}



                                        <input className="contact_inputs" placeholder="Email Address"     type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                     
                   />
                                     {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                                        <input className="contact_inputs1" placeholder="cheque no "   name='message' type="text"
                      {...register('message', {
                        required: true
                      })}
                   />
                                        <div className="w-100 position-relative">
                                        
                                       

                                            <Button
                                            className="text-center"
                                            width="100%"
                                            height="48.73px"
                                            type="submit"
                                            style={{marginTop:"30px"}}
                                            >
                                                Send
                                            </Button>
                                            
                                        </div>
                                        </form>
                                    </div>

                                    <div className="col-md-6  contactFormAddress">
                                        <p className="contact_form_para1">
                                        Financial Center, Dubai UAE
                                        </p>
                                        <p className="contact_form_para1">
                                        +971 52 568 3437
                                        </p>
                                        <p className="contact_form_para1">
                                        ibrahim@dukkanapp.com
                                        </p>
                                        <div className="d-flex justify-content-between " style={{width:"130px"}} >
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Youtube} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Instagram} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Facebook} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Twitter} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106305.78158849265!2d73.0595328!3d33.6297984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1664722377758!5m2!1sen!2s"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            
        </div>
    )
}
export default ContactUsSectioinFundUsPage