import "./App.css";
import { useEffect, useState } from "react";
import Tour from "./Tour";
function App() {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [showMore, setShowMore] = useState(false);
  //const [showId, setShowId] = useState(null);

  const fetchTour = async () => {
    setLoading(true);

    try {
      const result1 = await fetch("https://course-api.com/react-tours-project");
      const result2 = await result1.json();
      setLoading(false);
      setTour(result2);
    } catch (Error) {
      setLoading(false);
      console.log(Error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  // useEffect(() => {
  //   fetch("https://course-api.com/react-tours-project").then((result) => {
  //     result.json().then((res) => {
  //       setTour(res);
  //       console.log(res);
  //     });
  //   });
  // }, []);

  function handleRemoveTour(tourId) {
    setTour(tour.filter((r) => r.id !== tourId));
  }
  // function handleShow(tourId) {
  //   setShowId(tourId);
  // }
  if (loading) {
    return (
      <>
        <h1> Loading...</h1>
      </>
    );
  }

  if (tour.length === 0) {
    return (
      <>
        <h1>No more tours left</h1>
      </>
    );
  }
  return (
    <div className="App">
      Learn React
      <h1>Our Tours</h1>
      <h3>Total number of tours left {tour.length}</h3>
      <hr />
      {tour.map((t) => {
        return (
          <Tour key={t.id} {...t} handleRemoveTour={handleRemoveTour} />
          // <section key={t.id}>
          //   <img src={t.image} alt={t.name} />
          //   <div>
          //     <h2>{t.name} </h2>
          //     <p>
          //       {" "}
          //       <b>Best Price:</b> <i>{t.price} euro</i>
          //     </p>
          //   </div>
          //   {showId === t.id ? (
          //     <p>{t.info}</p>
          //   ) : (
          //     <p>{t.info.substring(0, 100)} </p>
          //   )}
          //   <button onClick={() => handleShow(t.id)}>
          //     {showId === t.id ? "Show less" : "show More"}
          //   </button>
          //   <br />
          //   <br />
          //   <button
          //     style={{ backgroundColor: "red", color: "black" }}
          //     onClick={() => handleRemoveTour(t.id)}
          //   >
          //     Not interested
          //   </button>
          //   <hr />
          //   <br />
          // </section>
        );
      })}
    </div>
  );
}

export default App;
