import { Swiper, SwiperSlide } from "swiper/react";
import { Title } from "../../elements/Title";
import "./events.css";
import { Teej } from "./Teej";
import { Welcome } from "./Welcome";
import { Womensday } from "./Womensday";
import { Pooja } from "./Pooja";

export default function Events() {
  return (
    <>
      <div className="events">
        <Title text="Events" />
        <div className="events-container">
          <div className="event">
            <div className="event-title">
              <h1>Teej Event</h1>
            </div>
            <div className="event-details">
              <div className="event-photo">
                <Teej />
              </div>
              <p>
                We recently celebrated our annual Teej event with great fervor
                and enthusiasm, bringing together the vibrant community of
                Nepali ladies residing in Canada. Teej, a significant Hindu
                festival, holds a special place in our hearts as it symbolizes
                the bond of love and marital bliss. The event was a magnificent
                showcase of our rich cultural heritage, where colors, music, and
                dance merged seamlessly to create an unforgettable experience.
              </p>
              <p>
                Dressed in traditional attire, we immersed ourselves in the
                festivities. The air was filled with joyous laughter and the
                sound of rhythmic footsteps as we swayed and twirled to
                traditional folk songs. The energy in the room was palpable as
                women of all ages, backgrounds, and experiences came together,
                celebrating unity, sisterhood, and the essence of womanhood.
              </p>
              <p>
                Our Teej event was not just about merriment, but also about
                preserving and passing down our cultural traditions to future
                generations. It served as a platform for younger members to
                connect with their roots, witness the beauty of our customs, and
                feel a sense of belonging to our Nepali community in Canada. We
                extend our deepest gratitude to everyone who contributed their
                time, talent, and resources to make this event a resounding
                success.
              </p>
            </div>
          </div>
          <div className="event">
            <div className="event-title">
              <h1>Welcome Event</h1>
            </div>
            <div className="event-details">
              <div className="event-photo">
                <Welcome />
              </div>
              <p>
                At CNMC, we believe in extending a warm and heartfelt welcome to
                our new members and Nepali international students arriving in
                Canada. Our recent Welcome Event was a celebration of diversity,
                unity, and the beginning of lifelong connections. It was an
                opportunity for newcomers to find solace, support, and guidance
                within our community, as they embarked on their journey in a new
                country.{" "}
              </p>
              <p>
                We created an inclusive and nurturing environment where
                individuals could share their stories, experiences, and
                aspirations. The event was filled with smiles, laughter, and
                genuine connections, as friendships were forged and a support
                network was formed. We provided valuable information, resources,
                and mentorship to facilitate a smoother transition and empower
                new comers to thrive in their new surroundings.
              </p>
            </div>
          </div>
          <div className="event">
            <div className="event-title">
              <h1>Women's Day Event</h1>
            </div>
            <div className="event-details">
              <div className="event-photo">
                <Womensday />
              </div>
              <p>
                CNMC hosted an event with all the board members, life members
                and general members attending it on International Women's day on
                March 8 to celebrate the significance of women in building the
                modern society.
              </p>
              <p>
                We conduct conference or seminar featuring keynote speakers,
                panel discussions, and workshops on various topics related to
                women's rights and empowerment. This could be an opportunity for
                women to learn new skills, network with like-minded individuals,
                and gain inspiration from women who have made significant
                contributions in their field.
              </p>
              <p>
                We also used Women's Day as an occasion to honor and recognize
                women who have made significant contributions to their community
                or country. This could include presenting awards or hosting a
                ceremony to celebrate the achievements of women in different
                fields, such as science, art, politics, or business.
              </p>
            </div>
          </div>
          <div className="event">
            <div className="event-title">
              <h1>Pooja Event</h1>
            </div>
            <div className="event-details">
              <div className="event-photo">
                <Pooja />
              </div>
              <p>
                We are delighted to share with you the spiritual and divine
                experience we had at our recurring Pooja Event. Every third
                Sunday of the month, all the women in our organization gather to
                worship at a sacred temple, immersing ourselves in a tranquil
                atmosphere of devotion and reverence.
              </p>
              <p>
                During the Pooja Event, we come together as a community to offer
                our prayers, seek blessings, and connect with our inner selves.
                The fragrance of incense, the gentle chants, and the flickering
                flames of the sacred lamps create a serene ambiance that uplifts
                our spirits and nourishes our souls.
              </p>
              <p>
                Through this event, we not only deepen our spiritual connection
                but also strengthen the bonds of sisterhood and unity within our
                organization. We support and uplift each other, sharing our
                joys, sorrows, and aspirations. It is a beautiful occasion that
                allows us to embrace our cultural heritage and express gratitude
                for the blessings in our lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
