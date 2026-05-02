# 📚 Book Borrow — Online Book Borrowing Platform

> A seamless and modern web application designed to digitize the traditional library experience.


## 🌐 Live URL

[https://assignment-8-batch-13.vercel.app/](https://assignment-8-batch-13.vercel.app/)

---

## 🎯 Purpose

Book Borrow allows users to explore a vast digital collection of books, filter by categories, and borrow titles online. The platform aims to replace the traditional library card experience with a fast, secure, and user-friendly digital alternative — accessible from any device.

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Email/password login and Google OAuth via BetterAuth
- 📖 **Book Browsing** — Explore all books with search and category filtering
- 🗂️ **Category Sidebar** — Filter books by Story, Tech, or Science categories
- 📋 **Book Details** — View in-depth info including availability and borrow option
- 👤 **My Profile** — View and update personal information (name & photo)
- 🔒 **Private Routes** — Book details and profile are protected for logged-in users only
- 📱 **Fully Responsive** — Works beautifully on mobile, tablet, and desktop
- 🎞️ **Marquee Banner** — Scrolling new arrivals and promotional text on the home page
- 🌟 **Featured Books Section** — Top 4 books highlighted on the home page
- 🔔 **Toast Notifications** — Real-time feedback for login, registration, and borrowing actions

---

## 🛠️ Tech Stack

| Technology     | Purpose                              |
|----------------|--------------------------------------|
| **Next.js**    | React framework with App Router      |
| **Tailwind CSS** | Utility-first styling              |
| **DaisyUI**    | Pre-built UI component library       |
| **BetterAuth** | Authentication (Email + Google OAuth)|
| **MongoDB**    | Database for storing books and users |

---

## 📦 NPM Packages Used

| Package            | Purpose                                      |
|--------------------|----------------------------------------------|
| `better-auth`      | Authentication and session management        |
| `mongoose`         | MongoDB object modeling                      |
| `react-hot-toast`  | Toast notification messages                  |
| `swiper`           | Touch-enabled book carousel / slider         |
| `next`             | Full-stack React framework                   |
| `tailwindcss`      | Utility-first CSS framework                  |

---

## 🔐 Authentication Flow

- **Registration**: Name, Email, Photo URL, Password → redirects to Login
- **Login**: Email + Password or Google → redirects to Home
- **Session**: Managed securely by BetterAuth
- **Protected Routes**: Unauthenticated users are redirected to `/login`

---

## 📄 License

This project is for educational purposes as part of a web development assignment.

---

> Made with ❤️ using Next.js, BetterAuth, and MongoDB
