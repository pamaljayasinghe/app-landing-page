import PropTypes from "prop-types";

const FeaturesSection = ({ id }) => {
  const features = [
    {
      id: 1,
      title: "Digital Closet",
      description:
        "Effortlessly organize your wardrobe and access it anytime, anywhere.",
      icon: "../src/img/7.png", // Replace with your actual icon path
    },
    {
      id: 2,
      title: "3D Virtual Try-On",
      description:
        "Visualize how clothes fit your body using advanced 3D body modeling.",
      icon: "../src/img/8.png", // Replace with your actual icon path
    },
    {
      id: 3,
      title: "Weather-Based Outfit Suggestions",
      description:
        "Always dress comfortably with real-time weather-based outfit recommendations.",
      icon: "../src/img/9.png", // Replace with your actual icon path
    },
  ];

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Experience the Future of Fashion
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Discover how Fit-On helps you streamline your wardrobe and transform
          your style.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FeaturesSection.propTypes = {
  id: PropTypes.string,
};

FeaturesSection.defaultProps = {
  id: undefined,
};

export default FeaturesSection;
