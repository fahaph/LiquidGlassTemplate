import { FaFacebook, FaTiktok, FaYoutube,FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center py-4 mx-auto my-3"
        style={{
          opacity: 0.8,
          width: "90%",
          height: "fit-content",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "20px",
        }}
      >
        <div className="d-flex flex-column mx-auto">
          <span>
            <FaFacebook />
            <a href="https://www.facebook.com/valentinyforyou" target="_blank">
              Facebook
            </a>
          </span>
          <span>
            <FaTiktok />
            <a href="https://www.tiktok.com/@valentinyforyou" target="_blank">
              Tiktok
            </a>
          </span>
          <span>
            <FaYoutube />
            <a href="https://www.youtube.com/@fahaph2368" target="_blank">
              Youtube
            </a>
          </span>
          <span>
            <FaLine />
            <a href="">f-phonwen</a>
          </span>
        </div>
      </footer>
    </>
  );
}
