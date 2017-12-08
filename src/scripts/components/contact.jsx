import React from 'react';

let Contact = () => {
    return (
        <div id = 'contact-container' style = {{backgroundImage: "url('../../src/images/contact.png')"}}>
            <div id = 'upper-container'>
                <div>Get in touch</div>
                <div>
                    To facilitate interactions with our key clients, our offices
                    are conveniently located within a few miles of their facilities 
                    in the US and in India. Our company provides free parking in all 
                    our locations
                </div>
                <a href = 'mailTo:Sales@MAQSoftware.com'>
                    Email: Sales at MAQsoftware dot com
                </a>
            </div>
            <div id = 'address-container' className = 'row'>
                <div className = 'locations col-12 col-sm-3 col-md-4 col-lg-4 col-xl-4' id = 'redmond-location'> 
                    <i className="fa fa-map-marker location-icon" aria-hidden="true"></i>
                    <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
                    <div className = 'location-name'>Redmond</div>
                    <div className = 'location-map'>View Map</div>
                    <div className = 'location-address'>
                        15446 Bel-Red Road,<br/>
                        Second Floor, <br/>
                        Redmond, WA 98052
                    </div>
                    <div className = 'phone-number'>+1 425 526 5399</div>
                </div>
                <div className = 'locations col-12 col-sm-3 col-md-4 col-lg-4 col-xl-4' id ='hyderabad-location'> 
                    <i className="fa fa-map-marker location-icon" aria-hidden="true"></i>
                    <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
                    <div className = 'location-name'>Hyderabad</div>
                    <div className = 'location-map'>View Map</div>
                    <div className = 'location-address'>
                        Level 7, Astro, aVance Business Hub<br/>
                        Behind Dell Campus<br/>
                        HITEC City 2, Madhapur<br/>
                        Hyderabad 500 081
                    </div>
                    <div className = 'phone-number'>+91 40 4010 0570</div>
                </div>
                <div className = 'locations col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' id = 'mumbai-location'>
                    <i className="fa fa-map-marker location-icon" aria-hidden="true"></i>
                    <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
                    <div className = 'location-name'>Mumbai</div>
                    <div className = 'location-map'>View Map</div>
                    <div className = 'location-address'>
                        201, Meadows Building<br/>
                        Sahar Plaza on Andheri Kurla Road<br/>
                        Andheri East<br/>
                        Mumbai 400 059
                    </div>
                    <div className = 'phone-number'>+91 22 3080 0201</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;