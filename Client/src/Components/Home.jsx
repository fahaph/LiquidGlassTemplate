import "./Css/Home.css";

export default function Home() {
  //

  return (
    <>
      <section
        id="home"
        className="vh-100 d-flex align-items-center text-center"
      >
        <div className="container">
          <h1 className="display-4 fw-bold fade-in">
            <span className="shiny-text">Valentiny for You</span>
          </h1>
          <p className="lead fade-in-2 mb-4">
            Realistic beauty, enchanting fragrance, and a memory that never
            fades. Give a gift that truly endures.
          </p>
        </div>
      </section>
    </>
  );
}
