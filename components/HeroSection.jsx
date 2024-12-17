import { Apple, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ffe8e0]-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Your Personal Fashion Designer & Selector,{" "}
                <span className="text-[#e57373] ">Right in Your Pocket!</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-xl">
                Organize your closet, get personalized outfit suggestions, and
                virtually try on clothes like never before.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <Apple className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Coming Soon</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>

                <button className="group flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Coming Soon</div>
                    <div className="text-sm font-semibold">Web Version</div>
                  </div>
                </button>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-8">
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-purple-700 shadow-sm border border-purple-100">
                  🎯 AI-Powered Wheather Suggestions
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-purple-700 shadow-sm border border-purple-100">
                  👕 Virtual Try-On
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-purple-700 shadow-sm border border-purple-100">
                  ✨ Smart Wardrobe
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
              <img
                src="../src/img/fitonmob.png"
                alt="Fit-On App Screenshot"
                className="relative max-w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                style={{ maxHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default HeroSection;
