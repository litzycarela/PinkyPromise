# PinkyPromise 📹🤝

A private video diary and secret gallery for two friends separated by distance, but always close at heart.

## 💡 About
This project was made for me and a good friend of mine in light of me moving away for the next year. It's a place for us to keep video diaries, share memories, and feel close even when we're far apart.

## 👥 Who's it for?
Just me and my friend! But the code is open for anyone who wants to make their own secret gallery.

## ✨ Features
- **Private Video Gallery:** Upload and view special video entries.
- **Secret Access:** Password-protected entry for privacy.
- **Send Notifications:** Fun buttons to send custom push notifications to your friend's phone (via Simplepush API).
- **Modern, Cozy UI:** Simple, friendly, and easy to use.

## 🚀 How to Use

### 1. View the Live Site
- **Frontend:** Hosted on GitHub Pages (static site)
- **Backend:** Hosted on Render (Node.js/Express for notifications)
- Visit your deployed site and enter the password to access the gallery!

### 2. Run Locally
1. **Clone this repo:**
   ```sh
   git clone https://github.com/litzycarela/PinkyPromise.git
   cd PinkyPromise
   ```
2. **Install backend dependencies:**
   ```sh
   npm install
   ```
3. **Start the backend server:**
   ```sh
   node server.js
   ```
4. **Open `gallery.html` in your browser.**
   - For notifications to work locally, make sure your fetch URL in `gallery.html` is set to `/notify`.

### 3. Deploy Your Own
- **Frontend:** Push to GitHub and enable GitHub Pages.
- **Backend:** Deploy `server.js` to Render, Heroku, or another Node.js host. Update the notification fetch URL in `gallery.html` to your backend's public URL.

## 🔔 Notification Feature
- Click any of the special buttons to send a push notification to your friend's phone (using Simplepush).
- Make sure to set your own Simplepush key in `server.js` if you fork this project!

## 🛠️ Tech Stack
- HTML, CSS, JavaScript (frontend)
- Node.js, Express, Axios, CORS (backend)

## 🎉 Fun Fact
This is my first ever full website, coded in less than 5-ish hours!

---

Made with love, distance, and a pinky promise. 💖
