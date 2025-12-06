function InputArea({ handleChange, inputText, addItem }) {
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
// CHALLENGE: Input Area ni <input> va <button> elementlarini
// o'z ichiga olgan alohida InputArea komponentiga ajratdim.
// Sizning vazifangiz — ilovani avvalgidek ishlashini ta'minlash,
// faqat bu safar InputArea alohida komponent bo'lishi kerak.

// DO NOT: ToDoItem.jsx faylini o'zgartirmang.
// DO NOT: input/button elementlarini App.jsx ga qaytarib joylamang.

// Hint 1: InputArea.jsx ichidagi input element state ni qanday boshqarishni o'ylab ko'ring.
// Hint 2: Input qiymatini App.jsx dagi addItem() funksiyasiga qanday uzatishni o'ylang.
