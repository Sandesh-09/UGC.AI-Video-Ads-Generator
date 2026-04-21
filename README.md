# 🎬 UGC.AI – AI Ads Generator

## 🌐 Live Demo
🚀 [UGC.AI](https://ugc-ai-frontend.onrender.com/)  
👉 Try generating AI ads in real-time!

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

ugc/
├─ client/        # React frontend, routes, UI, Clerk integration  
├─ server/        # Express API, Prisma, AI generation, webhooks  
│  ├─ controllers/  
│  ├─ routes/  
│  ├─ prisma/  
│  └─ configs/  
└─ README.md  

---

## ⚙️ How to Run

1. Clone the repository  
git clone https://github.com/Sandesh-09/UGC.AI-Video-Ads-Generator.git  
cd UGC.AI-Video-Ads-Generator  

2. Install dependencies  
cd client && npm install  
cd ../server && npm install  

3. Add environment variables  

client/.env  
VITE_CLERK_PUBLISHABLE_KEY=your_key  
VITE_BASEURL=your_url  

server/.env  
DATABASE_URL=your_database_url  
CLERK_SECRET_KEY=your_secret  
CLERK_WEBHOOK_SIGNING_SECRET=your_webhook_secret  
CLOUDINARY_URL=your_cloudinary_url  
GOOGLE_CLOUD_API_KEY=your_api_key  

4. Run Prisma migrations  
cd server  
npx prisma migrate dev  

5. Start the project  
cd client && npm run dev  
cd ../server && npm run server  

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