const $ = (id) => document.getElementById(id);
const status = $("status");

const GOOGLE_ORIGINS = [
  "https://google.com",
  "https://www.google.com",
  "https://accounts.google.com",
  "https://mail.google.com",
  "https://youtube.com",
  "https://www.youtube.com"
];

$("clear").addEventListener("click", async () => {
  const rangeVal = $("range").value;
  const since = rangeVal === "all" ? 0 : Date.now() - Number(rangeVal);

  // what data types the user picked
  const dataToRemove = {
    history: $("history").checked,
    cache: $("cache").checked,
    cookies: $("cookies").checked,
    downloads: $("downloads").checked,
    formData: $("formData").checked
  };

  if (!Object.values(dataToRemove).some(Boolean)) {
    status.textContent = "pick at least one thing 💭";
    return;
  }

  status.textContent = "cleaning... 🧹";

  const googleOnly = $("googleOnly").checked && $("cookies").checked;

  try {
    // history & downloads can't be filtered by origin, so clear those globally
    const globalTypes = {};
    if (dataToRemove.history) globalTypes.history = true;
    if (dataToRemove.downloads) globalTypes.downloads = true;
    if (dataToRemove.formData) globalTypes.formData = true;

    if (Object.keys(globalTypes).length) {
      await chrome.browsingData.remove({ since }, globalTypes);
    }

    // cookies + cache: optionally scoped to Google sites
    const scopedTypes = {};
    if (dataToRemove.cookies) scopedTypes.cookies = true;
    if (dataToRemove.cache) scopedTypes.cache = true;

    if (Object.keys(scopedTypes).length) {
      const opts = { since };
      if (googleOnly) opts.origins = GOOGLE_ORIGINS;
      await chrome.browsingData.remove(opts, scopedTypes);
    }

    status.textContent = "all clean! ✨";
  } catch (e) {
    status.textContent = "oops: " + e.message;
  }
});

// --- Google account history: deep-links into Google's own tools ---
// Google has no API to delete account activity, so the best we can do is
// jump straight to the right page where you confirm it yourself.
const openTab = (url) => chrome.tabs.create({ url });

// Straight to the "Delete activity" dialog (default to "All time").
$("deleteActivity").addEventListener("click", () =>
  openTab("https://myactivity.google.com/delete-activity")
);

// Activity controls — where you set the 3/18/36-month auto-purge.
$("autoDelete").addEventListener("click", () =>
  openTab("https://myactivity.google.com/activitycontrols")
);

// YouTube watch & search history.
$("ytHistory").addEventListener("click", () =>
  openTab("https://myactivity.google.com/product/youtube")
);

// Full My Activity feed.
$("activity").addEventListener("click", () =>
  openTab("https://myactivity.google.com/myactivity")
);

// disable the "google only" toggle when cookies is off
$("cookies").addEventListener("change", (e) => {
  $("googleOnly").disabled = !e.target.checked;
});
$("googleOnly").disabled = !$("cookies").checked;
