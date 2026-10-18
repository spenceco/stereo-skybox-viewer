# Stereo cut-out skybox viewer

Puts a side-by-side (SBS) 3D cut-out of a person into a 360° environment, so they look like they're standing in it.
Everything happens in the browser. Images you load never leave your device.

**Live:** https://spenceco.github.io/stereo-skybox-viewer/

## How it works
- The SBS image is split in two. The left half goes on a plane that only the left-eye camera sees (layer 1), and the right half goes on an identical plane that only the right-eye camera sees (layer 2). Each eye gets its own view, so the depth baked into the photo stays intact. The plane also sits at a real distance in the scene.
- The panorama goes onto a `GroundedSkybox`. Its lower half becomes a flat floor with real depth, so the person's feet rest on the ground instead of floating against a backdrop at infinity.
- A soft contact shadow, brightness/warmth controls, and an optional face-the-camera billboard help blend the person into the scene.

## View modes
| Mode | Use |
|---|---|
| Mono | phone/desktop preview (left-eye image) |
| Full SBS | XR glasses in 3D/SBS mode (e.g. 3840×1080): go fullscreen |
| Half SBS | 3D TVs / players expecting squeezed SBS |
| Anaglyph | red/cyan glasses |
| Enter VR | WebXR headsets (Quest etc.), with true per-eye rendering and head tracking |

Controls: drag to look, WASD/arrows to walk, wheel = person distance, **H** toggles the panel, and "Gyro look" works on phones.
Settings are saved in localStorage.

## Inputs
- **SBS cut-out:** left eye | right eye, a transparent PNG (best). A black background also works if you untick "Cut-out has alpha".
  `?sbs=<url>` loads one from a CORS-enabled URL.
- **Panorama:** 2:1 equirectangular JPG/PNG. Load it from the menu, use `?env=<url>`, or add it to `config.js`.
- `?mode=sbs|hsbs|anaglyph|mono`, `?hideui`
