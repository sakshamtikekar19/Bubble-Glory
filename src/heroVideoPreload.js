import heroBgVideo from './assets/hero-bg.mp4';

if (typeof document !== 'undefined') {
  const id = 'hero-bg-video-preload';
  if (!document.getElementById(id)) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'preload';
    link.as = 'video';
    link.href = heroBgVideo;
    document.head.appendChild(link);
  }
}

export { heroBgVideo };
