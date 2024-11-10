export function Contact() {
    return (
        <section className="contact-container" id="contact">
            <h2 className="contact-title">Get in touch</h2>
            <div className="contact-inner-container">
                <div className="contact-info-container">
                    <div className="contact-information">
                        <h3 className="contact-title">Call me</h3>
                        <span className="contact-subtitle">+91 9677491369</span>
                    </div>

                    <div className="contact__information">
                        <h3 className="contact-title">Email</h3>
                        <span className="contact-subtitle">journeywithshankar@gmail.com</span>
                    </div>

                    <div className="contact__information">
                        <h3 className="contact-title">Location</h3>
                        <span className="contact-subtitle">Chennai, Tamil Nadu, India</span>
                    </div>
                </div>
                <form action="" className="contact-form">
                    <div className="contact-content">
                        <label htmlFor="" className="contact-label">Name</label>
                        <input type="text" className="contact-input" />
                    </div>
                    <div className="contact-content">
                        <label htmlFor="" className="contact-label">Email</label>
                        <input type="text" className="contact-input" />
                    </div>
                    <div className="contact-content">
                        <label htmlFor="" className="contact-label">Message</label>
                        <input name="" id="" className="contact-input"></input>
                    </div>
                    <a href="mailto:marineshankar@gmail.com?subject = Feedback&body = Message" className="contact-form-button">Send
                    </a>
                </form >
            </div >
        </section >
    );
}
