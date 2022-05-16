import React from "react";
import conta from "../image/conta.png";
import contac from "../image/contac.png";
function Contact() {
  return (
    <div>
      <section className="sec">
        <h1>Contact us</h1>
        <p className="pa">
          <p>
            This Contact Us page is for a marketing agency that works directly
            with businesses. Since it knows its audience,
            <br />
            Zedney Creative encourages visitors to "have a talk" one-on-one
            rather than providing a one-way communication <br />
            channel via support resources.
            <br />
          </p>
          <p>
            Why this "Contact Us" page stands out:
            <br />
            Aside from the obvious pink flamingo, Zedney Creative captures the
            visitor's attention with three methods of
            <br />
            communication.
          </p>
          <br />
          <p>
            The map provides the exact location of the office, the "Meet Us"
            section includes a phone number and email <br />
            for general inquiries, and the "Pitch Us" section includes a
            template that helps businesses submit their <br />
            ideas directly to the company for consideration.
          </p>
          <br />{" "}
        </p>
      </section>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={conta} alt="carte" />
        </div>
        <div style={{}}>
          <img src={contac} alt="carte" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
