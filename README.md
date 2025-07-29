# 🛒 Ecommerce Product Page

A fully functional **React + Vite** ecommerce product page featuring search, category filter, price sorting, and pagination — all powered by **JSON Server** for mock API data.

---

## 📦 Features

- 🔍 **Search** products by keyword  
- 🗂️ **Filter** products by category  
- 💰 **Sort** products by price (Low to High, High to Low)  
- 📄 **Client-side Pagination** for browsing products easily  
- ⚡ Mock API using `json-server`

---

## 🛠️ Technologies Used

- React
- Vite
- JSON Server
- Tailwind CSS (if applicable)
- Axios (for API requests)

---

## 🚀 Getting Started

Follow the steps below to set up and run the project locally on your machine:

---

### 📁 Step 2: Navigate to the Project Folder

```bash
cd EcommerceProductPage
```

### 📦 Step 3: Install Dependencies

```bash
npm install
```

### 📝 Step 4: Add JSON Server Script

Open the package.json file and replace the "scripts" section or add this script:

```bash
"scripts": {
  "server": "json-server --watch src/db/data.json --port 3000",
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### ▶️ Step 5: Start the JSON Server

```bash
npm run server
```
The mock API will run at: http://localhost:3000

### ▶️ Step 6: Start the React Development Server

```bash
npm run dev
```
The app will be available at: http://localhost:5173





