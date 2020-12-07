import React, { useState, useEffect } from "react";
import "./LogoClients.css";
import image1 from "../../logos/image1.webp";
import image2 from "../../logos/image2.webp";
import image3 from "../../logos/image3.webp";
import image4 from "../../logos/image4.webp";
import image5 from "../../logos/image5.webp";
import image6 from "../../logos/image6.webp";
import image7 from "../../logos/image7.webp";
import image8 from "../../logos/image8.webp";
import image9 from "../../logos/image9.webp";
import image10 from "../../logos/image10.webp";
import image11 from "../../logos/image11.webp";
import image12 from "../../logos/image12.webp";
import image13 from "../../logos/image13.webp";
import image14 from "../../logos/image14.webp";
import image15 from "../../logos/image15.webp";
import image16 from "../../logos/image16.webp";

const LogoClients = () => {
  const allLogos = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  var itemX = allLogos[Math.floor(Math.random() * allLogos.length)];
  var itemY = allLogos[Math.floor(Math.random() * allLogos.length)];

  const updatedLogos = allLogos.map(function (item) {
    return item === itemX ? itemY : item;
  });

  const [logo, setLogo] = useState(image1);
  const [logos, setLogos] = useState(allLogos);

  //Change Client Logo Randomly in 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setLogos(updatedLogos);
    }, 5000);
    return () => clearInterval(interval);
  }, [updatedLogos]);

  return (
    <div className="logo-container">
      <h1 className="logo-title">CLIENTS</h1>
      <p className="logo-text">
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
      <div className="logos-content">
        {logos.map((logoOne) => {
          return (
            <div
              className="logo"
              style={{ backgroundImage: `url(${logoOne})` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoClients;
