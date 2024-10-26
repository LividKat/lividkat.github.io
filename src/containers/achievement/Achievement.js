import React, {useContext} from "react";
import {useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { Carousel } from "react-responsive-3d-carousel";

export default function Achievement() {



  if (!achievementSection.display) {
    return null;
  }

  const section = Object.values(achievementSection);
  const renderSlide = section.map(achievementCards => {
    return (
      <div key={achievementCards.image}>
        <p className="titles">
          {achievementCards.title},{achievementCards.subtitle}
        </p>
        <img src={achievementCards.image} alt={achievementCards.imageAlt} />
        <p className="footer">{achievementCards.footerLink}</p>
      </div>
    );
  });
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1>
              {achievementSection.title}
            </h1>
            <p>
              {achievementSection.subtitle}
            </p>
          </div>
<div>

</div>

<div>

    <Carousel
width= "1200px"
height= "680px"
autoPlay={false}
spread="wide">
      <img src="https://imgur.com/FjFhuXC.png" alt="Alt1" />
      <img src="https://imgur.com/dIvTvPv.png" alt="Alt2" />
      <img src="https://imgur.com/hVHLiP1.png" alt="Alt3" />
      <img src="https://imgur.com/du3tYqv.png" alt="Alt4" />
      <img src="https://imgur.com/seWOuo0.png" alt="Alt5" />
      <img src="https://imgur.com/afvQVXe.png" alt="Alt6" />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DmW01hHGXgA?si=4iZpH81sCPbBfYnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Carousel>


    <Carousel
	width= "800px"
	height= "800px"
	autoPlay={false}
	spread="normal">
      <img src="https://imgur.com/CvOq2Ek.png" alt="Alt1" />
      <img src="https://imgur.com/OvQ129f.png" alt="Alt2" />
      <img src="https://imgur.com/ppSvsdk.png" alt="Alt3" />
      <img src="https://imgur.com/qShl1Vd.png" alt="Alt4" />
      <img src="https://imgur.com/Kss7gMZ.png" alt="Alt5" />
      <img src="https://imgur.com/LfmaVvF.png" alt="Alt6" />
      <img src="https://imgur.com/WLcMkQB.png" alt="Alt7" />
      <img src="https://imgur.com/G34aZ25.png" alt="Alt8" />
      <img src="https://imgur.com/utO4UPf.png" alt="Alt9" />
      <img src="https://imgur.com/2STZQAr.png" alt="Alt10"/>
      <img src="https://imgur.com/lMJrSUc.png" alt="Alt11"/>
</Carousel>


    <Carousel
width= "450px"
height= "800px"
autoPlay={false}
spread="normal"
>
      <img src="https://imgur.com/jaCabuZ.png" alt="Alt1" />
      <img src="https://imgur.com/059joAs.png" alt="Alt2" />
      <img src="https://imgur.com/nGmKvem.png" alt="Alt3" />
      <img src="https://imgur.com/lyphptu.png" alt="Alt4" />
      <img src="https://imgur.com/521WGxJ.png" alt="Alt5" />
      <img src="https://imgur.com/Q4cRnGK.png" alt="Alt6" />
      <img src="https://imgur.com/RgCyGrI.png" alt="Alt7" />

    </Carousel>
</div>
        </div>
      </div>
    </Fade>
  );
}
