# 📦 Next Forge Assignment

A monorepo built with **Next.js**, **Forge**, and **pnpm**.  
This project demonstrates a modern developer setup with shared packages, efficient dependency management, and modular architecture.


---

## 📦 Installation & Setup

1️⃣ **Clone the repository**

```
git clone https://github.com/kishorprajapati1212/pyCray_Assigment.git
cd pyCray_Assigment
```
2️⃣ Install dependencies with pnpm and run
```
pnpm install
pnpm --filter web dev
```
👉if not live then also do this step
```
cd apps/web
pnpm install
pnpm run dev
 ```
 # Home Page:-
<img width="1913" height="864" alt="Screenshot 2025-08-19 174753" src="https://github.com/user-attachments/assets/18f02573-7a31-41f6-9af5-fefd49b8c238" />

# Event Page:-
<img width="1916" height="850" alt="Screenshot 2025-08-19 180818" src="https://github.com/user-attachments/assets/2db7861a-f3d2-451d-bbfc-95e60fd14f44" />

# Field Error Show:-
<img width="1919" height="859" alt="Screenshot 2025-08-19 180852" src="https://github.com/user-attachments/assets/2655296d-1061-4403-982d-f740ba72373c" />

# Searching:- 
<img width="1919" height="865" alt="Screenshot 2025-08-19 181007" src="https://github.com/user-attachments/assets/ef5c8a8c-3223-4eb1-95ee-897677f8ccf1" />

---
## 🚀 Features

- ✅ Add events with a name + date  
- ✅ Search/filter events by name  
- ✅ Delete events easily (trash icon)  
- ✅ Data persists in **localStorage**  
- ✅ Responsive grid layout with Tailwind
---

## 📂 Folder Structure
```
apps/web/
├── app/
│   └── events/
│       └── page.tsx         # Main events page
│─────layout.tsx
│─────page.tsx
│─────style.css
│
├── components/
│   └── EventForm.tsx        # Form to add events
│
├── hooks/
│   └── useLocalStorage.ts   # Custom hook for localStorage
│
└── package.json
```
