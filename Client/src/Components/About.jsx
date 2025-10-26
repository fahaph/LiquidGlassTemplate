export default function About() {
  return (
    <>
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 mb-4 mb-md-0">
              <div
                className="p-4 rounded-4"
                style={{
                  backdropFilter: "blur(12px)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <h2>About Us</h2>
                <p>
                  We believe that a thoughtful gift should capture a moment and
                  preserve it forever. That's why we started Valentiny for You. <br/><br/>

                  Tired of giving beautiful, yet temporary, fresh flowers that
                  wilted within a week, we sought a better solution: the Soap
                  Flower. Each bloom we create is a piece of art, meticulously
                  handcrafted to rival the beauty of a real rose, but designed
                  to last a lifetime. <br/><br/>
                  
                  Our mission is simple: to help you express
                  love, gratitude, and remembrance with a gift that is as
                  enduring as your feelings. When you choose a bouquet from us,
                  you're not just buying flowers; you're investing in a
                  long-lasting memory and a beautiful piece of décor that can be
                  cherished for years. <br/><br/>
                  
                  Thank you for letting us be a part of
                  your special moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
