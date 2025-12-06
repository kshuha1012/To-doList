import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// CHALLENGE: Input Area ni <input> va <button> elementlarini
// o'z ichiga olgan alohida InputArea komponentiga ajratdim.
// Sizning vazifangiz — ilovani avvalgidek ishlashini ta'minlash,
// faqat bu safar InputArea alohida komponent bo'lishi kerak.

// DO NOT: ToDoItem.jsx faylini o'zgartirmang.
// DO NOT: input/button elementlarini App.jsx ga qaytarib joylamang.

// Hint 1: InputArea.jsx ichidagi input element state ni qanday boshqarishni o'ylab ko'ring.
// Hint 2: Input qiymatini App.jsx dagi addItem() funksiyasiga qanday uzatishni o'ylang.
