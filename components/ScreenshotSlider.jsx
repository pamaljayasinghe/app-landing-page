import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ScreenshotSlider = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(3);

  // Duplicate some items to create infinite effect
  const screenshots = [
    { id: "clone1", src: "../src/img/screen1.png", title: "JOY" },
    { id: "clone2", src: "../src/img/screen2.png", title: "JOURNEY" },
    { id: "clone3", src: "../src/img/screen3.png", title: "DISCOVER" },
    { id: 1, src: "../src/img/screen4.png", title: "JOY" },
    { id: 2, src: "../src/img/screen5.png", title: "JOURNEY" },
    { id: 3, src: "../src/img/screen6.png", title: "DISCOVER" },
    { id: 4, src: "../src/img/screen7.png", title: "TRAVELER" },
    { id: 5, src: "../src/img/screen8.png", title: "PAY" },
    { id: "clone4", src: "../src/img/screen1.png", title: "JOY" },
    { id: "clone5", src: "../src/img/screen1.png", title: "JOURNEY" },
    { id: "clone6", src: "../src/img/screen1.png", title: "DISCOVER" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => ((prev + 1) % (screenshots.length - 6)) + 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          A Sneak Peek into Your Fashion Future
        </h2>
        <p className="text-center text-gray-600 mt-4 mb-16 max-w-3xl mx-auto">
          You can check our app look from here .very soon you can try it on you
          ios device.
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-250"
            style={{
              width: `${screenshots.length * 230}px`,
              transform: `translate3d(-${
                (currentSlide - 3) * 230
              }px, 0px, 0px)`,
            }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`flex-shrink-0 px-2 ${
                  index >= currentSlide - 1 && index <= currentSlide + 1
                    ? "opacity-100 scale-100"
                    : "opacity-50 scale-90"
                } ${
                  index === currentSlide ? "z-10" : "z-0"
                } transition-all duration-300`}
                style={{ width: "230px" }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={screenshot.src}
                    alt={`App Screenshot ${screenshot.title}`}
                    className="w-full object-cover"
                    style={{ height: "500px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(6)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index + 3 === currentSlide ? "bg-purple-600 w-4" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index + 3)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ScreenshotSlider.propTypes = {
  id: PropTypes.string,
};

ScreenshotSlider.defaultProps = {
  id: undefined,
};

export default ScreenshotSlider;
