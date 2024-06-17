import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex gap-12 font-lato text-gray-400">
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
      </ul>
      <div className="flex gap-2 ">
        <img src="./assets/Help-Avatar.svg" alt="avtar" />
        <div>
          <a href="#">
            <p className="font-playfair font-thin">Have any Questions?</p>
            <a href="#" className="font-lato font-medium">
              Talk to a specialist
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
