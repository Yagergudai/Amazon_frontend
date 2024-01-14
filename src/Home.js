import React from "react";
import "./Home.css";
import Product from "./Product";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <div className="home__container">
        <Banner />
        <p className="home__row">
          You are on amazon.com. You can also shop on Amazon Canada for millions
          of products with fast local delivery. Click here to go to amazon.ca
        </p>
        <br />
        <div className="home__row">
          <Product
            id="8"
            title="TRUEBREW Drip Coffee Machin"
            price={320.95}
            rating={4}
            image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/41a657d6-de49-4032-8ab5-b41e0ea87d6b._CR0%2C0%2C2000%2C2000_.jpg"
          />
          <Product
            id="9"
            title="Gucci Guilty Eau de Parfume Pour Homme 5 oz/150 mL"
            price={102.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/51AuHIACdKL._SX679_.jpg"
          />
          <Product
            id="10"
            title="Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Renewed)"
            price={197}
            rating={4}
            image="https://m.media-amazon.com/images/I/61hZrbHRMWL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="11"
            title="Ethiopian Lion of Judha T-shirt Black"
            price={17.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51RWukPbn9L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12"
            title="Amazon Essentials Mens Full-Zip Hooded Fleece Sweatshirt
            "
            price={20.1}
            rating={5}
            image="https://m.media-amazon.com/images/I/81+gRlBXxDL._AC_SY879_.jpg"
          />
          <Product
            id="13"
            title="Tongce Body Wave Lace Front Wigs Human Hair Pre Plucked 13x6 Lace Frontal Wigs Human Hair 180% Density Brazilian Virgin Human Hair Wigs for Women Natural Color (30 Inch)
            "
            price={134.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81M2MpQBK9L._SX679_.jpg"
          />
          <Product
            id="14"
            title="Rolex Oyster Perpetual GMT Master II men'swatch"
            price={16995}
            rating={5}
            image="https://m.media-amazon.com/images/I/61khY3ZlyJL._AC_SY695_.jpg"
          />
          <Product
            id="15"
            title="Golden Grooming Co. Bath and Body Skin Care Kit - Christmas Gift for Men - w/ Deep Exfoliating Scrub, Face Wash, Moisturizer, Body Wash, 2 in1 Beard & Hair Shampoo, Body Balm, Solid Cologne & Tweezers"
            price={44.48}
            rating={3}
            image="https://m.media-amazon.com/images/I/51h8aICq7PL._SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="16"
            title="Homedics Tabletop Water Fountain, Home Décor Soothing Sound Machine - Automatic Pump, Deep Basin & Natural River Rocks. Indoor Zen Relaxation for Office, Living Room, or Bedroom, 8.25” Tall"
            price={44.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/815vZaQ9FXL._AC_SX679_.jpg"
          />
          <Product
            id="17"
            title="Pantene Shampoo, Conditioner and Hair Treatment Set, Daily Moisture Renewal for Dry Hair, Safe for Color-Treated Hair"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71rx6HR9emL._SX679_.jpg"
          />
          <Product
            id="18"
            title="Sony a7 III Mirrorless Camera with 28-70mm Zoom Lens + 2pcs 64GB Memory + Case+ Tripod + Steady Grip Pod + Filters + Macro + 2X Lens + 2X Batteries + Accessory Bundle (Renewed)"
            price={2499.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91+jG43jKML._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="19"
            title="INNOCN 32inch OLED 4K Computer Monitor, UHD (3840 x 2160) Professional Monitor"
            price={1149.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/811VXsw2EiL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="20"
            title="PlayStation 5 Pulse 3D Wireless Headset"
            price={99}
            rating={5}
            image="https://m.media-amazon.com/images/I/617BtfBMPPL._AC_SX679_.jpg"
          />
          <Product
            id="21"
            title="DJI Avata Explorer Combo - First-Person View Drone with Camera, UAV Quadcopter with 4K Stabilized Video, Super-Wide 155° FOV, Emergency Brake and Hover, Includes New RC Motion 2 and Goggles Integra Black"
            price={889}
            rating={5}
            image="https://m.media-amazon.com/images/I/61B-ePmpFWL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
