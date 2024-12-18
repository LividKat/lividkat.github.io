import React, {useContext} from "react";
import {useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "../../images";
import { render } from "react-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState();

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  function handleChange(index) {
    setCurrentIndex(index);
  }
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
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
<div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
	
      />

      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
	  
        />

      )}

    </div>

<LiteYouTubeEmbed
  id="PLX_KTaTQgY7dCCCMO1QaPHgOJhwsah-2L"
  title="Playlist con mis trabajos sobre 3D, motion graphics y edición de video"
  playlist={true}
  playlistCoverId="hqHIQjeWyME" // Choose an id from any video to be the cover
  poster="maxresdefault"
/>

        </div>
      </div>
    </Fade>
  );
}
