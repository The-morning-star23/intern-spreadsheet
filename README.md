# 📊 Intern Design Assignment — Spreadsheet UI in React

This project is a front-end-only static prototype replicating a Google Sheets-style spreadsheet layout, as per the Figma design provided in the internship assignment.

> Designed to visually match the product’s spreadsheet view and demonstrate UI skills using React, TypeScript, TailwindCSS, and `@tanstack/react-table`.

---

## 🔧 Tech Stack

- ⚛️ React 18 + Vite
- 📘 TypeScript (Strict Mode)
- 💨 Tailwind CSS
- 📊 [`@tanstack/react-table`](https://tanstack.com/table/v8) for grid rendering

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Navbar.tsx
│   ├── SheetHeader.tsx
│   ├── Table.tsx
│   └── Pagination.tsx
├── data/
│   └── mockData.ts
├── App.tsx
└── main.tsx

---

## 🚀 Getting Started

1. Clone the repo

```bash
git clone https://github.com/yourusername/intern-spreadsheet.git
cd intern-spreadsheet

2. Install dependencies

```bash
npm install

3. Run the project locally

```bash
npm run dev
App will run at http://localhost:5173

---

## ✅ Features Implemented

🔍 Pixel-close layout matching Figma design

🧮 Fully functional spreadsheet-style table

✅ Custom cell rendering:

✅ Colored pill-style status

✅ Priority colored by level (High, Medium, Low)

✅ URL cells as hyperlinks

🖱️ Interactive toolbar (buttons & tabs log actions)

⌨️ Arrow-key navigation (cell-to-cell movement)

📄 Bottom pagination row (2 / 2 with buttons)

---

## ⚠️ Trade-offs / Assumptions

This is a static prototype: No actual API, backend, or data persistence.

Pagination is mocked: it logs to console and disables buttons appropriately but does not manage real data pages.

Keyboard navigation highlights a cell visually but doesn’t allow in-place editing.

All state is managed locally via React hooks — no external state libraries are used.

---

✅ Linting & Type Checking

```bash
npm run lint        # ESLint + Prettier
npm run type-check  # TypeScript strict mode

---

## 📦 Deployment

To deploy it (optional):

Push to GitHub

Connect your repo to Vercel or Netlify

Set build command: npm run build

Set output directory: dist

---

## 📎 Live Preview
https://intern-spreadsheet.vercel.app/

---

## 🧑‍💻 Author
Shubh Kumar

---

## 🐙 License
MIT — feel free to reuse components.


---

### ✅ To Finish

Just:
1. Save that content in a `README.md` file at your project root.
2. Push to GitHub.
3. (Optional) Deploy it to Vercel or Netlify for the live link.

Let me know if you want help setting up the deployment or writing a commit history summary!



