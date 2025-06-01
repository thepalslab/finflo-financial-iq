## 🛠 MVP Description

This MVP is a fully front-end implementation that includes:

- A static HTML page simulating a Financial IQ article  
- A sidebar or floating card with insight prompts powered by FinFlo  
- Static JSON content store of tips  
- A lightweight AI embedding model that matches insights to the current article's topic  

> No backend or user data is used — ensuring a secure, low-friction demo.

---

## 🔧 Tech Stack

- HTML, CSS, JavaScript  
- JSON for storing insights  
- Lightweight AI embedding logic for local context matching

---

## 📁 Repository Structure

```
finflo-financial-iq/
├── index.html         – Demo page  
├── style.css          – Styles for layout and FinFlo UI  
├── finflo.js          – Insight display and AI logic  
├── insights.json      – Content tip set  
└── README.md          – Setup and walkthrough
```

---

## ✅ How to Use the MVP

1. Open `index.html` in a browser  
2. FinFlo will detect the article theme and display 1–2 relevant insights  
3. The embedded AI logic selects the most relevant tips based on context  
4. Click an insight to expand and learn more  
5. All logic runs in-browser — no internet or backend required
