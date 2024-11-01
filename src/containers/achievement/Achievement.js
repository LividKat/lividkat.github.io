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
width= "65vmin" 
height= "40vmin" 
autoPlay={false}
showIndicators={false}
spread="wide">
      <img  src="https://imgur.com/FjFhuXC.png" alt="Alt1" />
      <img  src="https://imgur.com/dIvTvPv.png" alt="Alt2" />
      <img  src="https://imgur.com/iilrToh.png" alt="Alt3" />
      <img  src="https://imgur.com/G15IPz2.png" alt="Alt4" />
      <img  src="https://imgur.com/cer1Tw4.png" alt="Alt5" />
      <img  src="https://imgur.com/vrdsx1o.png" alt="Alt6" />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=MUAHotNQb3YNadao&amp;list=PLX_KTaTQgY7dCCCMO1QaPHgOJhwsah-2L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Carousel>




    <Carousel
width= "60vmin" 
height= "60vmin" 
	autoPlay={false}
	showIndicators={false}
	spread="wide">

      <video src="https://imgur.com/Hpxbq3z.mp4" muted autoPlay loop />
      <img src="https://imgur.com/Kss7gMZ.png" alt="Alt5" />
      <img src="https://imgur.com/BaS00P4.png" alt="Alt6" />
      <img src="https://imgur.com/XdJegxW.png" alt="Alt2" />
      <img src="https://imgur.com/ppSvsdk.png" alt="Alt3" />
      <video src="https://imgur.com/cHI4Anx.mp4" muted autoPlay loop />



      <img src="https://imgur.com/94WFUeS.png" alt="Alt7" />
      <video src="https://imgur.com/LHxDozz.mp4" muted autoPlay loop alt="https://imgur.com/XdJegxW.png"/>
      <img src="https://imgur.com/G34aZ25.png" alt="Alt9" />
      <img src="https://imgur.com/nnTrGXI.png" alt="Alt10" />
      <img src="https://imgur.com/2STZQAr.png" alt="Alt11"/>
      <video src="https://imgur.com/x1j06gz.mp4" muted autoPlay loop />
</Carousel>





    <Carousel
width= "40vmin" 
height= "70vmin" 
autoPlay={false}
showIndicators={false}
spread="wide"
>
      <img src="https://imgur.com/jaCabuZ.png" alt="Alt1" />
      <img src="https://imgur.com/059joAs.png" alt="Alt2" />
      <img src="https://imgur.com/nGmKvem.png" alt="Alt3" />
      <video src="https://imgur.com/whaMD4i.mp4" muted autoPlay loop />
      <video src="https://imgur.com/V3qaCLX.mp4" muted autoPlay loop />
      <img src="https://imgur.com/RgCyGrI.png" alt="Alt4" />
	

    </Carousel>
</div>
        </div>
      </div>
    </Fade>
  );
}