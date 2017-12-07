import React from 'react';

let Footer = () => {
    return (
        <div id = 'footer'>
            <img alt = 'MAQSoftware'/>
            <div>
                <span>About Us</span>
                <span>Contact</span>
                <span>Terms &amp; Conditions</span>
            </div>
            <div id = 'social-network'>
                    <span>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <a href = 'https://www.facebook.com/maqsoftware' target = '_blank'>Facebook</a>
                    </span>
                    <span>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <a href = 'https://twitter.com/MAQSoftware' target = '_blank'>Twitter</a>
                    </span>
                    <span>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <a href = 'https://www.instagram.com/maqsoftware/' target = '_blank'>Instagram</a>
                    </span>
            </div>
            <div id = 'newsletter'>
                <span>Subscribe to our newsletter</span>
                <div className = "input-group">
                    <input type = "text" className = "form-control" placeholder = "Email Address"/>
                    <span className = "input-group-btn">
                    <button className ="btn" type="button">Submit</button>
                    </span>
                </div>
            </div>
            <div>
                15446 Bel-Red Road,<br/>
                Second Floor, <br/>
                Redmond, WA 98052
            </div>
        </div>
    )
}

export default Footer;
