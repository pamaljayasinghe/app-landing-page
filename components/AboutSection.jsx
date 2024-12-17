import PropTypes from "prop-types";

const AboutSection = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="../src/img/about.jpeg"
              alt="About Us"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Empowering Your Fashion Choices
            </h2>
            <p className="text-gray-600 mb-6">
              At Fit-On, we aim to simplify outfit selection and elevate your
              style. By combining cutting-edge 3D technology, virtual try-ons,
              and intuitive digital closets, we help you look your best
              effortlessly.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  id: PropTypes.string,
};

AboutSection.defaultProps = {
  id: undefined,
};

export default AboutSection;
