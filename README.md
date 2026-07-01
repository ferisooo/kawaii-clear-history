<p align="center">
  <img src="kawaii-cleaner/icons/icon128.png" alt="Kawaii Cleaner icon" width="128" height="128" />
</p>

<h1 align="center">🌸 Kawaii Cleaner</h1>

A cute, one-click Chrome extension that wipes your local browsing data and gives
you fast shortcuts to clear the history in your Google account.

## ✨ What it does

* **One-click clean** — wipe history, cache, cookies, downloads, and autofill
  from a single popup.
* **Pick a time range** — last hour, 24 hours, 7 days, 4 weeks, or all time.
* **Google-only mode** — limit clearing to Google sites so you stay logged in
  elsewhere.
* **Account shortcuts** — jump to Google's pages to delete My Activity, enable
  auto-delete, and clear YouTube history.
* **Privacy-first** — collects nothing, sends nothing. Only one permission
  (`browsingData`), and no minified or hidden code.

## 🚀 Install (no coding needed)

1. **`Code` → `Download ZIP`** on the GitHub page, then unzip it.
2. Go to `chrome://extensions` and turn on **Developer mode** (top-right).
3. Click **`Load unpacked`** and select the **`kawaii-cleaner`** folder.
4. Click the 🌸 icon, tick what to clear, press **✨ Clear now**.

> 💡 Pin it via the puzzle-piece icon. Update later by double-clicking
> `update.bat` (Windows) — it overwrites the folder, so keep no personal files there.

## 🛡️ Is it safe?

Yes — it's small enough to read yourself. `manifest.json` shows the single
`browsingData` permission; `popup.js` only deletes data and opens Google pages
(no uploads). See `PRIVACY.md` and `TERMS.md` for details. No installer, no
`.exe`, no hidden code.

## 💖 Credits & License

Idea by **Feris Imagination**, code by **Claude**. Forks welcome — please keep
the credits. Released under the [MIT License](LICENSE); see
[`TERMS.md`](TERMS.md) and [`PRIVACY.md`](PRIVACY.md).
