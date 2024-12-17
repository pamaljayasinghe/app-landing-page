import PropTypes from "prop-types";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <p>+94 787221179</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <p>contact@myfiton.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <p>Colombo,Srilanka</p>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="contact-input" />
              <input
                type="email"
                placeholder="Email"
                className="contact-input"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="contact-input"
            ></textarea>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

ContactSection.propTypes = {
  id: PropTypes.string,
};

ContactSection.defaultProps = {
  id: undefined,
};

export default ContactSection;
