import React from "react";
import "./members.css";
import { Card } from "./Card";
import Default from "../../assets/default.png";
import CurrentMembers from "../../assets/current_members.jpg";
import { Title } from "../../elements/Title";
import AmbikaGhawali from "../../assets/members/ambika_ghawali.jpg";
import BaijantiBaral from "../../assets/members/baijanti_baral.jpg";
import BijayaThapaliya from "../../assets/members/bijaya_thapaliya.jpg";
import ChandaAdhikari from "../../assets/members/chanda_adhikari.jpg";
import ChandraKhatri from "../../assets/members/chandra_khatri.jpg";
import DurgaAdhikari from "../../assets/members/durga_adhikari.jpg";
import GitaDawadi from "../../assets/members/gita_dawadi.jpg";
import GitaParajuli from "../../assets/members/gita_parajuli.jpg";
import GitaSharma from "../../assets/members/gita_sharma.jpg";
import IndiraBhandari from "../../assets/members/indira_bhandari.jpg";
import KamalaGhimire from "../../assets/members/kamala_ghimire.jpg";
import PadmaParajuli from "../../assets/members/padma_parajuli.jpg";
import PushpaKoirala from "../../assets/members/pushpa_koirala.jpg";
import SabitriBaral from "../../assets/members/sabitri_baral.jpg";
import ShantaRayamajhi from "../../assets/members/shanta_rayamajhi.jpg";
import TulsiSapkota from "../../assets/members/tulsi_sapkota.jpg";
import Footer from "../footer/Footer";

function Members() {
  return (
    <>
      <div className="members">
        <Title text="Members" />
        <div className="members-photo">
          <img src={CurrentMembers} alt="" />
        </div>
        <div className="members-text">
          <h3>Here are the current board members:</h3>
        </div>
        <div className="members-container">
          <div className="gallery">
            <Card
              image={AmbikaGhawali}
              name="Ambika Ghawali"
              position="President"
            />
          </div>
          <div className="gallery">
            <Card
              image={GitaDawadi}
              name="Gita Dawadi"
              position="Chairperson, Past President"
            />
          </div>
          <div className="gallery">
            <Card
              image={GitaSharma}
              name="Gita Sharma"
              position="Guardian, Past President"
            />
          </div>
          <div className="gallery">
            <Card
              image={DurgaAdhikari}
              name="Durga Adhikari"
              position="Senior Vice President"
            />
          </div>
          <div className="gallery">
            <Card
              image={PadmaParajuli}
              name="Padma Parajuli"
              position="Junior Vice President"
            />
          </div>
          <div className="gallery">
            <Card
              image={IndiraBhandari}
              name="Indira Bhandari"
              position="General Secretary"
            />
          </div>
          <div className="gallery">
            <Card
              image={ShantaRayamajhi}
              name="Shanta Rayamajhi Thapa"
              position="Treasurer"
            />
          </div>
          <div className="gallery">
            <Card
              image={BijayaThapaliya}
              name="Bijaya Thapaliya"
              position="Secretary"
            />
          </div>
          <div className="gallery">
            <Card
              image={BaijantiBaral}
              name="Baijanti Baral"
              position="Member"
            />
          </div>
          <div className="gallery">
            <Card
              image={PushpaKoirala}
              name="Pushpa Koirala Shanjal"
              position="Member"
            />
          </div>
          <div className="gallery">
            <Card image={SabitriBaral} name="Sabitri Baral" position="Member" />
          </div>
          <div className="gallery">
            <Card
              image={ChandraKhatri}
              name="Chandra Khatri"
              position="Member"
            />
          </div>
          <div className="gallery">
            <Card
              image={TulsiSapkota}
              name="Tulasi Sapkota"
              position="Member"
            />
          </div>
          <div className="gallery">
            <Card
              image={GitaParajuli}
              name="Gita Parajuli"
              position="Advisor"
            />
          </div>
          <div className="gallery">
            <Card
              image={KamalaGhimire}
              name="Kamala Ghimire"
              position="Advisor"
            />
          </div>
          <div className="gallery">
            <Card
              image={ChandaAdhikari}
              name="Chanda Adhikari"
              position="Advisor"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
