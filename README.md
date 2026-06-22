# 🌸 Kawaii Cleaner

A cute, one-click Chrome extension that wipes your local browsing data and gives
you fast shortcuts to clear the history saved in your Google account.

---

## ✨ Features

* **One-click clean.** Wipe your browsing data from a single cute popup.
* **Pick exactly what to clear:** search & browsing history, cache, cookies
  (sign-in data), download history, and autofill/form data.
* **Choose a time range:** last hour, 24 hours, 7 days, 4 weeks, or all time.
* **Google-only mode.** Optionally limit cookie/cache clearing to Google sites
  so you don't get logged out of everything else.
* **Google account shortcuts.** Quick buttons that jump straight to Google's own
  pages to delete My Activity, turn on auto-delete, and clear YouTube history.
* **One-click updater.** An `update.bat` file grabs the newest version for you.
* **Privacy-first.** Collects nothing, sends nothing — it all happens on your
  own computer.

## 🤔 How this is different from other "cleaner" tools

* **It's honest about what it can and can't do.** Most cleaners only wipe local
  browser data and quietly let you believe your Google account is cleared too.
  Kawaii Cleaner clears the local stuff **and** walks you straight to Google's
  own tools for the account side — and plainly says the extension itself can't
  delete account data.
* **Tiny and readable.** No accounts, no servers, no ads, no tracking, and only
  a single browser permission (`browsingData`). The whole thing is a small set
  of plain files you can read in a few minutes (see "Worried about viruses?").
* **No hidden code.** Nothing is minified, bundled, or obfuscated — what you see
  is what runs.
* **Cute on purpose.** A friendly pink popup instead of a scary settings maze.

## 🚀 Setup (no coding needed)

You don't need to know any code. Just follow these steps:

1. **Download this project.** On the project's GitHub page, click the green
   **`Code`** button → **`Download ZIP`**. Then unzip it somewhere easy, like
   your Desktop.
2. **Open Chrome's extensions page.** In Chrome, type this into the address bar
   and press Enter:
   ```
   chrome://extensions
   ```
3. **Turn on Developer mode.** Flip the **Developer mode** switch in the
   top-right corner to ON.
4. **Load the extension.** Click **`Load unpacked`**, then select the
   **`kawaii-cleaner`** folder from the project you unzipped.
5. **Done!** The 🌸 Kawaii Cleaner icon appears in your toolbar. Click it,
   tick what you want to clear, and press **✨ Clear now**.

> 💡 To pin it for easy access, click the puzzle-piece icon in Chrome's toolbar
> and click the pin next to Kawaii Cleaner.

**Updating later:** double-click `update.bat` (Windows) to pull the newest
version automatically. ⚠️ Note: the updater overwrites everything in its folder
with the latest version, so don't keep personal files in that folder.

## 🛡️ Worried about viruses or spying?

Totally fair — you should be careful with anything that touches your browser.
The good news: this project is small and you can read all of it yourself. No
coding knowledge needed to see that it's safe. Look at these files:

* **`kawaii-cleaner/manifest.json`** — lists every permission the extension asks
  for. It asks for only **one**: `browsingData` (the ability to clear data). It
  cannot read your passwords or browse for you.
* **`kawaii-cleaner/popup.js`** — the actual instructions the extension runs.
  It's short and commented in plain English. You'll see it only deletes data
  and opens Google pages — **it never sends anything anywhere** (there are no
  upload or "send to a server" commands).
* **`PRIVACY.md`** — confirms nothing is collected and everything stays on your
  device.
* **`TERMS.md`** — the terms of use.

There's **no installer, no `.exe`, no hidden/minified code, and no internet
upload**. If anything ever looked off, you'd see it in those two files above.

## 💖 Credits

* **Idea & concept:** Feris Imagination
* **Development & code:** Claude

Forks and modified versions are welcome — please keep crediting **Feris
Imagination** (idea) and **Claude** (work). See `TERMS.md` for details.

## 📄 License

Released under the [MIT License](LICENSE). See also [`TERMS.md`](TERMS.md) and
[`PRIVACY.md`](PRIVACY.md).
