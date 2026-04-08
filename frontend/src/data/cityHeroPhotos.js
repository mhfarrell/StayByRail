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
  //
  // Note on Wikimedia Commons: thumbnail widths above ~1280px return HTTP 429
  // when fetched from a non-Wikipedia referer (anti-abuse rate limiting on
  // on-demand thumbnail generation). Stick to 1280px or below for any
  // upload.wikimedia.org thumbnail URL — that width is reliably pre-cached.

  beijing: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Skyline_of_Beijing_CBD_with_B-5906_approaching_%2820211016171955%29_%281%29.jpg/1280px-Skyline_of_Beijing_CBD_with_B-5906_approaching_%2820211016171955%29_%281%29.jpg",
    credit: "N509FZ",
    link: "https://commons.wikimedia.org/wiki/File:Skyline_of_Beijing_CBD_with_B-5906_approaching_(20211016171955)_(1).jpg",
    source: "Wikimedia Commons",
    license: "CC BY 4.0",
  },
  shanghai: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/1280px-Pudong_Shanghai_November_2017_panorama.jpg",
    credit: "King of Hearts",
    link: "https://commons.wikimedia.org/wiki/File:Pudong_Shanghai_November_2017_panorama.jpg",
    source: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
  },
  guangzhou: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Canton_Tower_20241027.jpg/1280px-Canton_Tower_20241027.jpg",
    credit: "Tim Wu",
    link: "https://commons.wikimedia.org/wiki/File:Canton_Tower_20241027.jpg",
    source: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
  },
  shenzhen: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Commercial_area_of_futian_to_east2020.jpg/1280px-Commercial_area_of_futian_to_east2020.jpg",
    credit: "Charlie fong",
    link: "https://commons.wikimedia.org/wiki/File:Commercial_area_of_futian_to_east2020.jpg",
    source: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
  },
  chengdu: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg/1280px-%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg",
    credit: "FISU",
    link: "https://commons.wikimedia.org/wiki/File:%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg",
    source: "Wikimedia Commons",
    license: "CC BY 3.0",
  },
  xian: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/City_wall_of_Xi%27an_51550-Xian_%2827959363326%29.jpg/1280px-City_wall_of_Xi%27an_51550-Xian_%2827959363326%29.jpg",
    credit: "Xiquinho Silva",
    link: "https://commons.wikimedia.org/wiki/File:City_wall_of_Xi%27an_51550-Xian_(27959363326).jpg",
    source: "Wikimedia Commons",
    license: "CC BY 2.0",
  },
  hangzhou: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%E6%9D%AD%E5%B7%9E%E9%92%B1%E6%B1%9F%E6%96%B0%E5%9F%8E_4_%28cropped%29.jpg/1280px-%E6%9D%AD%E5%B7%9E%E9%92%B1%E6%B1%9F%E6%96%B0%E5%9F%8E_4_%28cropped%29.jpg",
    credit: "EditQ",
    link: "https://commons.wikimedia.org/wiki/File:%E6%9D%AD%E5%B7%9E%E9%92%B1%E6%B1%9F%E6%96%B0%E5%9F%8E_4_(cropped).jpg",
    source: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
  },
  hong_kong: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hong_Kong_Skyline_view_from_the_peak_2017.jpg/1280px-Hong_Kong_Skyline_view_from_the_peak_2017.jpg",
    credit: "Simeon W",
    link: "https://commons.wikimedia.org/wiki/File:Hong_Kong_Skyline_view_from_the_peak_2017.jpg",
    source: "Wikimedia Commons",
    license: "CC BY 2.0",
  },
};

export function getCityHeroPhoto(slug) {
  return cityHeroPhotos[slug] || null;
}
