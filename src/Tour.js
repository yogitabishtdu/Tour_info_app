import React from "react";
import { useState } from "react";

function Tour({ handleRemoveTour, ...t }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <section key={t.id}>
        <img src={t.image} alt={t.name} />
        <div>
          <h2>{t.name} </h2>
          <p>
            {" "}
            <b>Best Price:</b> <i>{t.price} euro</i>
          </p>
        </div>
        {showMore ? <p>{t.info}</p> : <p>{t.info.substring(0, 100)}... </p>}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "show More"}
        </button>
        <br />
        <br />
        <button
          style={{ backgroundColor: "red", color: "black" }}
          onClick={() => handleRemoveTour(t.id)}
        >
          Not interested
        </button>
        <hr />
        <br />
      </section>
    </div>
  );
}

export default Tour;
