# AI-Powered Expense Tracker  

## 📌 Overview  
This project is a **full-stack intelligent expense tracking application** built with **Next.js**, **Supabase**, **Prisma**, **Inngest**, **ArcJet**, **Shadcn UI**, **Tailwind CSS**, **Google Gemini AI**, and **Resend**.  

It allows users to **track expenses, plan budgets, scan receipts using AI, manage multiple accounts**, and **receive automated insights, alerts, and monthly reports** — all in one platform.  

---

## 🚀 Features  

### 1️⃣ AI-Powered Analytics  
- Analyze spending patterns using **Google Gemini AI**.  
- Identify high-spending categories and receive **personalized recommendations**.  

### 2️⃣ Smart Receipt Scanner  
- Upload receipts and automatically extract transaction details using **AI-powered OCR** from Google Gemini.  

### 3️⃣ Budget Planning & Tracking  
- Set budgets per account.  
- Get **real-time alerts** when nearing budget limits.  

### 4️⃣ Multi-Account Management  
- Manage multiple bank accounts and credit cards in a unified dashboard.  

### 5️⃣ Automated Insights & Reports  
- **Resend-powered emails** for:  
  - Monthly financial reports.  
  - Budget breach alerts.  
  - Expense summaries.  

### 6️⃣ Security & Performance  
- **ArcJet** for rate limiting, fraud prevention, and API abuse protection.  
- **Supabase** for secure, scalable authentication and database.  

---

## 🛠 Tech Stack  

| Layer       | Technologies |
|-------------|--------------|
| **Frontend** | Next.js, Tailwind CSS, Shadcn UI |
| **Backend** | Next.js API Routes |
| **Database** | Supabase (PostgreSQL) + Prisma ORM |
| **AI/ML** | Google Gemini AI |
| **Automation** | Inngest (event-driven tasks & scheduling) |
| **Security** | ArcJet |
| **Email Notifications** | Resend |

---

## ⚙️ Installation & Setup  

Follow these steps to run the project locally:  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/expense_tracker.git
cd expense_tracker
```

### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Create Environment Variables
Create a file named .env.local in the project root and add the following:
```bash
# Database
DATABASE_URL=your_postgres_connection_url
DIRECT_URL=your_direct_database_connection_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Resend Email API
RESEND_API_KEY=your_resend_api_key

# ArcJet API
ARCJET_KEY=your_arcjet_api_key

```

### 4️⃣ Run Database Migrations
```bash
npx prisma migrate dev

```
### 5️⃣ Start the Development Server
```bash
npm run dev
```

