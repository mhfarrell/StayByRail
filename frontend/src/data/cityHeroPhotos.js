// Curated hero photos for city guides and the homepage "Featured City"
// grid. When an entry exists here it is preferred over the live Wikipedia
// image fetch (which can return inconsistent aspect ratios and hero crops
// that don't work well on card grids).
//
// Each entry should be a wide-ish rectangular photo of the city, ideally
// 1600px on the long edge, in JPG or WebP. Free sources with commercial-
// use-permitted licences:
//   - Unsplash  — https://unsplash.com (default licence allows commercial)
//   - Pexels    — https://www.pexels.com (free-for-commercial licence)
//   - Wikimedia Commons — image description pages list the licence;
//     prefer CC BY / CC BY-SA / Public Domain.
//
// URL format tips:
//   - Unsplash: `https://images.unsplash.com/photo-XXXX?w=1600&q=80&auto=format&fit=crop`
//     The `photo-XXXX` ID is visible in the page URL on unsplash.com. The
//     `auto=format` flag serves WebP to supporting browsers automatically.
//   - Pexels: the page has a download button that gives a direct URL.
//   - Wikimedia Commons: right-click the image and copy the
//     `upload.wikimedia.org/...` URL. The wikiThumbUrl helper can resize
//     it on the fly if you swap in the thumbnail URL instead.
//
// Populate the object keys to match the city-guide `slug` in cityGuides.js.
// Any slug that is absent from this map will continue to use the Wikipedia
// lookup in useCityData / HomePage / GuidesIndexPage. Partial coverage is
// fine — fill these in at your own pace.
//
// When you add an entry include:
//   src    — the direct image URL (required)
//   credit — the photographer's name (required for the caption)
//   link   — the original page on Unsplash/Pexels/Commons (required)
//   source — "Unsplash" | "Pexels" | "Wikimedia Commons"

export const cityHeroPhotos = {
  // Example entry — replace with a real URL when you pick one:
  //
  // tokyo: {
  //   src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&q=80&auto=format&fit=crop",
  //   credit: "Jezael Melgoza",
  //   link: "https://unsplash.com/photos/landscape-photography-of-city-during-nighttime-layMbSJ3YOE",
  //   source: "Unsplash",
  // },
};

export function getCityHeroPhoto(slug) {
  return cityHeroPhotos[slug] || null;
}
