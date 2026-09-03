// Automatically detect and import all frame images in Gourmet_burger_frame
const detectedFrameModules = import.meta.glob(
  './Gourmet_burger_frame/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
);

// Sort numerically in ascending order (e.g. frame 1 to 300)
export const burgerFrames = Object.entries(detectedFrameModules)
  .sort(([pathA], [pathB]) => {
    const matchA = pathA.match(/(\d+)(?=\.[^.]+$)/);
    const matchB = pathB.match(/(\d+)(?=\.[^.]+$)/);
    if (matchA && matchB) {
      return parseInt(matchA[1], 10) - parseInt(matchB[1], 10);
    }
    return pathA.localeCompare(pathB, undefined, { numeric: true });
  })
  .map(([, url]) => url);
