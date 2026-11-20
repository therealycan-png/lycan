# Lycan

An AI whiteboard tutor that talks while it draws step by step, with a mock research-defense panel mode.

**Open it:** https://therealycan-png.github.io/lycan/ (on Android, use Chrome menu → *Add to Home screen*)

- Ask by typing, photo, or voice (up to 1 min)
- Pause / mute / Follow, plus follow-up questions on the same board
- 🎓 Defense mode: upload your paper's PDF and get grilled by a panelist
- Boards save automatically. Export any board as a PDF

Runs on a free Gemini API key from https://aistudio.google.com/apikey (stored only on your device).

## Google Drive setup (one time, free)

1. Go to https://console.cloud.google.com/ → create a project named **Lycan**.
2. **APIs & Services → Library** → search **Google Drive API** → **Enable**.
3. **APIs & Services → OAuth consent screen** → External → app name *Lycan*, your email → Save. Under **Audience/Test users**, add your Gmail.
4. **APIs & Services → Credentials → Create credentials → OAuth client ID** → type **Web application** →
   *Authorized JavaScript origins*: `https://therealycan-png.github.io` → Create.
5. Copy the **Client ID** (ends in `.apps.googleusercontent.com`), paste it in Lycan ⚙ → **Connect Google Drive**.

Boards save to a **Lycan Whiteboards** folder in your Drive, one subfolder per board. Delete them from 🗂 in the app.
