import "./Css/Services.css"

export default function Services() {
  const productData = [
    {
      id: 1,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/1.jpg",
    },
    {
      id: 2,
      title: "Soap Flower Bouquet",
      description: "Color: Pink",
      img: "./images/2.jpg",
    },
    {
      id: 3,
      title: "Soap Flower Bouquet",
      description: "Color: White",
      img: "./images/3.jpg",
    },
    {
      id: 4,
      title: "Soap Flower Bouquet",
      description: "Color: Red",
      img: "./images/4.jpg",
    },
    {
      id: 5,
      title: "Soap Flower Bouquet",
      description: "Color: White",
      img: "./images/5.jpg",
    },
    {
      id: 6,
      title: "Soap Flower Bouquet",
      description: "Color: Yellow",
      img: "./images/6.jpg",
    },
  ];

  return (
    <>
      <section id="services" className="py-5 text-center">
        <div className="container">
          <h2 className="my-5">Products</h2>
          <div className="row g-4">
            {productData.map((product) => (
              <div key={product.id} className="col-md-4">
                <div
                  className="product-card p-4 h-100 rounded-4"
                  style={{
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <img src={product.img} alt="" style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }} />
                  <h5>{product.title}{" "}{product.id}</h5>
                  <p>{product.description}</p>
                  {/* <button
                    className="btn btn-sm me-2"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                    }}
                  >
                    Details
                  </button> */}
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                    }}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
