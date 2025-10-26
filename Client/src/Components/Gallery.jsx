import "./Css/Gallery.css";

export default function Gallery() {
  const galleryData = [
    {
      id: 1,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/7.jpg",
    },
    {
      id: 2,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/8.jpg",
    },
    {
      id: 3,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/9.jpg",
    },
    {
      id: 4,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/10.jpg",
    },
    {
      id: 5,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/11.jpg",
    },
    {
      id: 6,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/12.jpg",
    },
    {
      id: 7,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/13.jpg",
    },
    {
      id: 8,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/14.jpg",
    },
  ];

  return (
    <>
      <section id="gallery" className="py-5 text-center">
        <div className="container">
          <h2 className="my-5">Gallery</h2>
          <div className="row g-3">
            {galleryData.map((gallery) => (
              <div key={gallery.id} className="col-6 col-md-3">
                <img className="gallery-card " src={gallery.img} alt="" style={{ width: "100%", borderRadius: "10px", marginBottom: "15px"}}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
