export default function Contact() {
  //

  return (
    <>
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact & Map</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div
                className="p-4 rounded-4"
                style={{
                  height: "350px",
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <h5>Get in touch</h5>
                <form className="mt-3">
                  <input
                    type="text"
                    className="form-control mb-3 bg-transparent text-white"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    className="form-control mb-3 bg-transparent text-white"
                    placeholder="Email"
                  />
                  <textarea
                    className="form-control mb-3 bg-transparent text-white"
                    placeholder="Message"
                    rows="3"
                  ></textarea>
                  <button
                    type="button"
                    className="btn w-100"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="rounded-4 d-flex align-items-center justify-content-center"
                style={{
                  height: "350px",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  overflow: "hidden"
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.9153366959104!2d100.19331556498801!3d16.747644244537405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dfbe986affc42d%3A0xf04fb558f3130f0!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiZ4LmA4Lij4Lio4Lin4Lij!5e1!3m2!1sth!2sth!4v1761479040938!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Placeholder"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
