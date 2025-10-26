import "./Css/Nav.css";

export default function Nav() {
  //

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top mx-auto mt-2 rounded-5"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.45)",
          width: "90%",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div className="container-fluid mx-2">
          <img
            src="./images/logo.jpg"
            alt="Valentiny For You"
            style={{
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <a className="fw-bold fs-5" href="#home">
            Valentiny
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="fw-bold" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="fw-bold" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="fw-bold" href="#services">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="fw-bold" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="fw-bold" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
