import React, { useState } from "react";
import "./Videos.css";
const Videos = () => {
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/mfDszZggvh0?playlist=mfDszZggvh0&autoplay=1&loop=1&mute=1");

  const handleVideoChange = (url) => {
    setVideoUrl(url);
  };

  return (
    <>
      <div className="bg-light w-100 overflow-hidden" id="testimonials">
        <div className="container py-vh-6">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <h2 className="display-6">
                Videos
              </h2>
              <p className="lead">
              ¡nadie nos daría una calificación negativa! ¡Y mira estas experiencias confiables! ¡Confía en nosotros!
              </p>
            </div>
            <div className="col-12 mt-4">
            <section>
                <iframe
                  key={videoUrl}
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                
                <ul className="navigation">
                  <li onClick={() => handleVideoChange("https://www.youtube.com/embed/mfDszZggvh0?playlist=mfDszZggvh0&autoplay=1&loop=1&mute=1")}>
                    <img
                      src="https://i.ytimg.com/vi/mfDszZggvh0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB_14OAztn3e_kCDkAwhqfdXsrs3Q"
                      alt=""
                    />
                  </li>
                  <li onClick={() => handleVideoChange("https://www.youtube.com/embed/AySBPCkGyyY?autoplay=1&loop=1&mute=0")}>
                    <img
                      src="https://i.ytimg.com/vi/AySBPCkGyyY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC-4QbE74X6Lb9kB3dAlIkQd3ybCQ"
                      alt=""
                    />
                  </li>
                  <li onClick={() => handleVideoChange("https://www.youtube.com/embed/NgdIyan_OeQ?autoplay=1&loop=1&mute=0")}>
                    <img
                      src="https://i.ytimg.com/vi/NgdIyan_OeQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBLvsHDTH7hvu7V4vFUt6oMY6iCSA"
                      alt=""
                    />
                  </li>
                
                
            </ul>
            </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
