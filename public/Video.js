import PhotoSwipeLightbox from './lib/photoswipe/photoswipe-lightbox.esm.js';
import PhotoSwipeVideoPlugin from './dist/photoswipe-video-plugin.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: './lib/photoswipe/photoswipe.esm.js',
});

const videoPlugin = new PhotoSwipeVideoPlugin(lightbox, {
  // options
});

lightbox.init();