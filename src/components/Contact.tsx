import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFaceSmile, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          Thanks for visiting
          <FontAwesomeIcon icon={faFaceSmile} className="ml-2" />
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Find Me Here
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                />
                <a
                  href="mailto:young.andre@northeastern.edu"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  young.andre@northeastern.edu
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                />
                <a
                  href="tel:5089756244"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  508-975-6244
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                />
                <a
                  href="https://www.instagram.com/andrew.d.y/"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  @andrew.d.y
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  Boston, MA
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What's Next?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Looking for summer internships and co-op opportunities from July -
              December 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
