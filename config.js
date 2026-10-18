// Extra panoramas listed in the Environment menu (2:1 equirectangular). The last one is the default.
window.STEREO_ENVS = [
  { name: 'Rooftop at blue hour', url: 'env/rooftop.jpg' },
  { name: 'Zen garden', url: 'env/zen.jpg' },
  { name: 'Throne room', url: 'env/throne_room.jpg' },
];
// Optional stereo prop placed behind the person (SBS transparent PNG), e.g. a throne.
window.STEREO_PROP = 'props/throne_rgba.png';
// Optional starting values for any slider (e.g. { height: 1.2, dist: 2 }); saved user settings still win.
window.STEREO_DEFAULTS = {};
