import "./about.css";
import { SiHandshake } from "react-icons/si";
import { GiStrong } from "react-icons/gi";
import { GiGrowth } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { MdCelebration } from "react-icons/md";
import { CNMC017 } from "./CNMC017";
import { CNMC019 } from "./CNMC019";
import { CNMC021 } from "./CNMC021";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About CNMC</h2>
            <p>
              Canadian Nepali Mahila Chautari (CNMC) is a non-profit social
              organization that was established on 2017 with Miss Gita Dawadi
              (Dhakal) and Miss Gita Sharma acting as President and Vice
              President respectively in the inaugural convention. Initially 14
              individual comprised the board members and 10 other members.
              Currently, 16 members comprise the board and 97 members constitute
              mostly life members.
            </p>
            <p>
              This social organization strives on serving the Nepalese community
              that is residing and facing problems in regards to their Canadian
              residence. Most recently, Miss Ambika Gyawali was elected as the
              president with the founding president Miss Gita Dawadi elected as
              the Chairman.
            </p>
            <p>
              This organization strives on delivering it’s service as a
              non-profit organization in helping Nepalese individuals. We are
              continually focused on expanding our services to further Nepalese
              across Canada. As per our name, we conduct meetings & seminars to
              discuss potential activities in serving the community.
            </p>
            <h2>Draft Objectives:</h2>
            <div className="objectives">
              <div className="objectives-list">
                <ul>
                  <li className="obj-card" id="card1">
                    <div className="icons">
                      <SiHandshake />
                    </div>
                    <div className="content">
                      To provide a range of supports to newcomers that help with
                      the transition of adjusting to socio cultural life in
                      Canada.
                    </div>
                  </li>
                  <li className="obj-card" id="card2">
                    <div className="icons">
                      <GiStrong />
                    </div>
                    <div className="content">
                      To focus programming which promote community strengths and
                      resident engagement to foster positive change.
                    </div>
                  </li>
                  <li className="obj-card" id="card3">
                    <div className="icons">
                      <GiGrowth />
                    </div>
                    <div className="content">
                      To focus programming to as per communities change and
                      grow, given this situation, main priority is to provide
                      responsive, culturally-sensitive and effective programs,
                      and services.
                    </div>
                  </li>
                  <li className="obj-card" id="card4">
                    <div className="icons">
                      <FaHandshake />
                    </div>
                    <div className="content">
                      Help establishing synergies of collaboration between
                      women's organization, organizations having similar
                      objectives for networking, exchange of knowledge, and best
                      practices.
                    </div>
                  </li>
                  <li className="obj-card" id="card5">
                    <div className="icons">
                      <GiDiscussion />
                    </div>
                    <div className="content">
                      Help to understand always women hold the key role to
                      family's well-being in community. So, given the fact
                      create a support system, we offer a discussion, and
                      interaction opportunities realizing what's most important.
                    </div>
                  </li>
                  <li className="obj-card" id="card6">
                    <div className="icons">
                      <MdCelebration />
                    </div>
                    <div className="content">
                      To focus programming International women day, Canada day,
                      Nepali Women festival TEEJ, New year celebration, family
                      day, mother day, festivals in order to promote Canadian
                      Nepali culture.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="past-board">
            <h1>2017-2019</h1>
            <CNMC017 />
            <h1>2019-2021</h1>
            <CNMC019 />
            <h1>2021-present</h1>
            <CNMC021 />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
