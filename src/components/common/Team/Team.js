import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import caract_data from "../../../data/caractData.json";


const Team = () => {

  const linkRef = useRef(null);
        const location = useLocation();
      
        useEffect(() => {
          if (location.hash === "#lineas" && linkRef.current) {
            linkRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, [location.hash, linkRef]);

  return (
    <>
      {/* <!-- team area start  --> */}
      <div className="tp-team-area pt-135 pb-110 grey-bg-4" id="lineas" ref={linkRef}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center">
                <span className="tp-section-subtitle mb-30">
                  Mira que es lo que te espera
                </span>
                <h2 className="tp-section-title">
                DESCUBRE NUESTRAS LÍNEAS EXCLUSIVAS
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
          {caract_data.slice(0,4).map((team, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="tp-team pb-30 pt-25">
                  <div className="tp-team__thumb">
                    <img src={team.img} alt="" />
                  </div>
                  <div className="tp-team__info pt-25">
                    <h3 className="tp-team-name">
                      <Link to="/team-details">{team.name}</Link>
                    </h3>
                    <p>{team.title}</p>
                  </div>
                  <div className="tp-team__social">
                    {team.social_links.map((l, i) => (
                      <a key={i} href={`${l.link}`} target={l.target}>
                        <i className={l.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- team area end  --> */}
    </>
  );
};

export default Team;
