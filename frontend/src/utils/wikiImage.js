// Resize a Wikipedia REST API summary image to a reasonable width.
//
// The Wikipedia page-summary API returns two image fields:
//   - `originalimage.source`  — the unscaled original, often a 4000x3000
//                                JPEG that can be 2-5 MB per image.
//   - `thumbnail.source`      — a pre-scaled thumbnail whose URL embeds the
//                                rendered width, e.g.
//                                  /commons/thumb/…/320px-Tokyo_Tower.jpg
//                                That `/NNNpx-` segment can be swapped to
//                                request any width up to the original, and
//                                Wikimedia's thumb server will render on
//                                demand.
//
// We always prefer the sized thumbnail. Only fall back to the original
// when Wikipedia failed to provide a thumbnail at all (rare).
export function wikiThumbUrl(summary, widthPx = 800) {
  if (!summary) return "";
  const thumb = summary.thumbnail?.source;
  if (thumb) {
    return thumb.replace(/\/\d+px-/, `/${widthPx}px-`);
  }
  return summary.originalimage?.source || "";
}
