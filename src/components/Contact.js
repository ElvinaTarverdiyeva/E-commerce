import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact">
                <div className="row">
                    <div className="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24304.907147343918!2d49.8225675!3d40.4063387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2s!4v1625830103059!5m2!1str!2s" width={550} height={900} style={{border: 0}} allowFullScreen loading="lazy" />
                    </div>

                    <div className="col-md-6">
                        <h2>Contact Us</h2>
                        <div className="row">
                            <div className="col-md-5">
                                   <strong>Address</strong><br></br>
                                   <p>Location : 123 Main Street, Anytown, CA 12345 – USA.</p>
                            </div>
                            <div className="col-md-5">
                            <strong>Address Email</strong>
                             <p>Contact01@plazathemes.com <br />
                                Contact02@plazathemes.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                   <strong>Telephone Enquiry</strong><br></br>
                                   <p>Hotline 01: (012) 800 456 789-987 <br />
                                      Hotline 01: (012) 800 456 789-987</p>
                            </div>
                            <div className="col-md-5">
                            <strong>Opening Time</strong><br></br>
                                   <p>Open: <strong className="time">8:00</strong> AM – Close: <strong className="time">8:00</strong> PM <br />
                                      Hotline 01: (012) 800 456 789-987</p>
                            </div>
                        </div>

                        <h2 id="tellus">Tell Us Your Project</h2>

                        <div className="row">
                            <div className="col-md-5">
                                   <input type="text" placeholder="First Name*" />
                            </div>
                            <div className="col-md-5">
                            <input type="text" placeholder="Last Name*" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5">
                                   <input type="text" placeholder="Email*" />
                                   <input type="text" placeholder="Subject*" />
                            </div>
                            <div className="col-md-5">
                            <input type="text" placeholder="Website" />
                            
                            </div>
                               <div className="col-md-12">
                            <input type="text" placeholder="Message*" id="msg" />
                            </div>
                        </div>
                         <button>SEND EMAIL</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
