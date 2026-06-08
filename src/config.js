// ─────────────────────────────────────────────────────────────
//  mashio project — integration settings
//  Fill a value in to turn on that live feature.
//  Leave it as an empty string '' to keep the graceful fallback.
//  (None of these are secret — they're public, domain-restricted IDs/links.)
// ─────────────────────────────────────────────────────────────
export const CONFIG = {
  // Instagram feed on the Events page — from behold.so (free).
  // Behold dashboard → your feed → "Embed" → copy the feed ID (looks like "AbCd1234EfGh").
  beholdFeedId: '',

  // Contact form — from formspree.io (free). Paste the form ID (the part after /f/, e.g. "xyzabcd").
  formspreeId: '',

  // Gift card — your Square or Giftly hosted gift-card URL.
  giftCardUrl: '',
}
