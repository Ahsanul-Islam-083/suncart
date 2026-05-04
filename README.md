# [☀️ SunCart — Modern Summer E-Commerce Platform](https://suncart-sigma.vercel.app/)

> **Explore, Shop & Stay Sun-Ready** — A clean, responsive summer e-commerce platform built with Next.js 16, featuring authentication, protected routes, and a seamless shopping experience.

🚀 [Visit the Live App](https://suncart-sigma.vercel.app/)
📂 [GitHub Repository](https://github.com/Ahsanul-Islam-083/suncart)

---

## 📖 Overview

**SunCart** is a full-stack e-commerce web application focused on summer essentials — sunglasses, summer outfits, skincare, beach accessories, and more. Users can browse products, view detailed product pages, and manage their profiles after authentication. Built to practise real-world full-stack patterns including protected routes, session management, and modern UI design.

---

## 🖼️ Screenshot


<img width="1747" height="977" alt="image" src="https://github.com/user-attachments/assets/423c38da-4c2b-4e99-b073-2ef8f0925dae" />
<img width="1744" height="965" alt="image" src="https://github.com/user-attachments/assets/ca48c614-aace-4fec-b742-e96a93912111" />
<img width="1659" height="917" alt="image" src="https://github.com/user-attachments/assets/4a5b5cea-c35a-4d17-aa2c-3991919e3580" />
<img width="1798" height="974" alt="image" src="https://github.com/user-attachments/assets/6fc5ccfc-fd85-4f02-b2c6-4db7d390e1f4" />
<img width="1642" height="956" alt="image" src="https://github.com/user-attachments/assets/95cbaf5b-b0ca-407c-9a7b-90e17ee3f75b" />
<img width="1550" height="980" alt="image" src="https://github.com/user-attachments/assets/cb0df712-36c0-4812-ba5e-a27010260c11" />



---

## 🚀 Features

- 🛍️ **Product Browsing** — Explore a wide range of summer products across multiple categories
- 🔍 **Product Details Page** — View full product info including price, rating, stock, and description
- 🔐 **Authentication** — Secure login and registration powered by BetterAuth
- 🌐 **Google Sign-In** — One-click sign in with Google OAuth
- 🔒 **Protected Routes** — Product details and profile pages are accessible only to logged-in users
- 👤 **Profile Management** — View and update profile name and image
- 🔄 **Callback Redirect** — After login, users are redirected back to the page they originally tried to access
- 🏷️ **Top Brands Marquee** — Smooth scrolling brand showcase using React Fast Marquee
- 🌊 **Summer Care Tips** — Static informational section with summer skincare and lifestyle tips
- 🎨 **Responsive Design** — Fully responsive across all screen sizes
- 🔔 **Toast Notifications** — Instant feedback for login, register, and profile update actions
- ⚡ **Loading Skeletons** — Smooth skeleton loaders for all major pages
- 🚫 **Custom 404 Page** — Friendly not-found page for invalid routes

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.4 | Full-stack React framework |
| React | 19.2.4 | UI library |
| Tailwind CSS | ^4 | Utility-first styling |
| HeroUI | ^3.0.3 | Pre-built UI components |
| BetterAuth | ^1.6.9 | Authentication & session management |
| MongoDB | ^7.2.0 | Database |
| React Icons | ^5.6.0 | Icon library |
| React Fast Marquee | ^1.6.5 | Animated brand showcase |
| React Toastify | ^11.1.0 | Toast notifications |
| Swiper | ^12.1.4 | Banner image slider |
| Animate.css | ^4.1.1 | Page entrance animations |

---

## 📦 Dependencies

```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "better-auth": "^1.6.9",
  "@better-auth/mongo-adapter": "^1.6.9",
  "mongodb": "^7.2.0",
  "@heroui/react": "^3.0.3",
  "@heroui/styles": "^3.0.3",
  "react-icons": "^5.6.0",
  "react-fast-marquee": "^1.6.5",
  "react-toastify": "^11.1.0",
  "swiper": "^12.1.4",
  "animate.css": "^4.1.1",
  "@gravity-ui/icons": "^2.18.0"
}
```

---

## 🏃 Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ahsanul-Islam-083/suncart.git
   cd suncart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   BETTER_AUTH_SECRET=your_secret_here
   BETTER_AUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in your browser**
   ```
   http://localhost:3000
   ```

---

## 🔐 Authentication Flow

- Users can register with **email/password** or **Google OAuth**
- Sessions are managed by **BetterAuth** with **MongoDB** as the database
- Protected routes (`/products/[id]`, `/profile`) redirect unauthenticated users to `/signin`
- After login, users are redirected back to the page they originally tried to access via `callbackURL`

---

## 🎮 How to Use

| Action | Result |
|---|---|
| Browse the homepage | View banner, summer tips, and top brands |
| Click any product | Redirected to sign in if not logged in |
| Register / Sign In | Access full product details |
| Visit `/profile` | View your account information |
| Click Update Profile | Update your name and profile image |
| Sign out | Session cleared, redirected to home |

---


## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for bug fixes, new features, or design improvements.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ☀️ *Summer never looked so good — shop smart with SunCart!*
