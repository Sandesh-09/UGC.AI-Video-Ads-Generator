# 🎬 UGC.AI – AI Ads Generator

## 🌐 Live Demo - 🚀 [UGC.AI](https://ugc-ai-frontend.onrender.com/)

UGC.AI is a full-stack AI SaaS platform that generates product-focused UGC-style ad creatives from uploaded product and model images. It combines AI media generation, authentication, credit usage, and subscription billing into a complete workflow designed for marketing teams, creators, and ecommerce brands.

---

## ⚡ Quick Overview
Generate high-quality image and video ads using AI in seconds, with a scalable SaaS system powered by authentication, credits, and subscription-based usage.

---

## 📌 Description

Instead of organizing expensive and time-consuming product shoots, users can upload a product image and a model image to instantly generate realistic promotional visuals. These visuals can then be converted into short AI-generated video ads.

The platform is designed as a real-world SaaS product with features like credit management, subscription plans, private project handling, and a public community feed for sharing generated content.

---

## 🧰 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Clerk React

### Backend
- Node.js
- Express 5
- TypeScript
- Prisma ORM

### Database & Storage
- PostgreSQL
- Cloudinary

### AI & Platform Services
- Google GenAI APIs
- Clerk Authentication
- Clerk Billing / PricingTable
- Sentry

---

## ✨ Features

- AI image generation using product + model inputs  
- AI video ad generation from generated images  
- Secure authentication using Clerk  
- Credit-based usage system with automatic deduction  
- Subscription billing with webhook integration  
- Personal dashboard for managing generated projects  
- Public community feed for sharing outputs  
- Cloudinary-based media storage  

---

## 🗂️ Project Structure

```text
ugc-ai/
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── assets/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── README.md
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── generated/
│   ├── middlewares/
│   ├── prisma/
│   ├── routes/
│   ├── types/
│   ├── videos/
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts
│   ├── server.ts
│   ├── tsconfig.json
│   └── README.md
│
└── README.md
```
---

## ⚙️ How To Run

### 1. Clone the project

```bash
git clone https://github.com/Sandesh-09/UGC.AI-Video-Ads-Generator.git
cd UGC.AI-Video-Ads-Generator
```

### 2. Install dependencies
```bash
cd client
npm install
```

```bash
cd ../server
npm install
```

### 3. Configure backend environment

Create `client/.env` and add:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_BASEURL=your_url
```

Create `server/.env` and add:

```env
DATABASE_URL=your_database_url
CLERK_SECRET_KEY=your_secret
CLERK_WEBHOOK_SIGNING_SECRET=your_webhook_secret
CLOUDINARY_URL=your_cloudinary_url
GOOGLE_CLOUD_API_KEY=your_api_key
``` 

### 4. Run Prisma migrations  
```bash
cd server  
npx prisma migrate dev
```
### 5. Start the backend

```bash
cd server
npm run server
```

### 5. Start the frontend

```bash
cd client
npm run dev
```

### 6. Open the app

Visit:

```text
http://localhost:5173
```
---

## 📌 Key Highlights

- Built a production-like SaaS application with authentication and billing  
- Integrated AI workflows for both image and video generation  
- Designed a scalable credit-based usage system  
- Implemented real-world subscription flow using Clerk webhooks  

---

## 👨‍💻 Author

Sandesh Gupta  

This project demonstrates my ability to build scalable, AI-powered SaaS applications with real-world features.
