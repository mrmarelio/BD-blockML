import React from "react";
import { ReactComponent as LocationIcon } from "assets/icons/location-icon.svg";
import { ReactComponent as EmailIcon } from "assets/icons/email-icon.svg";
import { ReactComponent as PersonIcon } from "assets/icons/person-icon.svg";

import "./contacts.scss";

const Contacts = () => (
  <div className="contacts">
    <div className="contacts__center">
      <h2 className="h2-font-style-contacts">Kontaktinė informacija</h2>
      <section className="contacts__center__section">
        <PersonIcon /> <span> Marius Orentas</span>
        <EmailIcon /> <span> marius.orentas@stud.vilniustech.lt</span>
        <LocationIcon /> <span> Lietuva, Vilnius.</span>
      </section>
    </div>
  </div>
);

export default Contacts;
