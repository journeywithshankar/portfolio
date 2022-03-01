export function Contact() {
    return (
        <section class="contact-container" id="contact">
            <h2 class="contact-title">Get in touch</h2>
            <div class="contact-inner-container">
                <div class="contact-info-container">
                    <div class="contact-information">
                        <h3 class="contact-title">Call me</h3>
                        <span class="contact-subtitle">+91 90806 79661</span>
                    </div>

                    <div class="contact__information">
                        <h3 class="contact-title">Email</h3>
                        <span class="contact-subtitle">shankarsowmiya07@gmail.com</span>
                    </div>

                    <div class="contact__information">
                        <h3 class="contact-title">Location</h3>
                        <span class="contact-subtitle">Chennai-600 093,Tamil Nadu,India</span>
                    </div>
                </div>
                <form action="" class="contact-form">
                    <div class="contact-content">
                        <label for="" class="contact-label">Name</label>
                        <input type="text" class="contact-input" />
                    </div>
                    <div class="contact-content">
                        <label for="" class="contact-label">Email</label>
                        <input type="text" class="contact-input" />
                    </div>
                    <div class="contact-content">
                        <label for="" class="contact-label">Message</label>
                        <input name="" id="" cols="0" rows="7" class="contact-input"></input>
                    </div>
                    <a href="mailto:shankarsowmiya07@gmail.com?subject = Feedback&body = Message" class="contact-form-button">Send
                    </a>
                </form >
            </div >
        </section >
    );
}