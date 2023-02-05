import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const modal = useSelector((state) => state.counter.openModal);

  console.log(modal);

  return (
    <div className={`${modal ? "modal-open" : ""}`}>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;

// const [pinCode, setPinCode] = useState("");

// // This runs everytime Pincode Changes
// useEffect(() => {
//   const getData = setTimeout(() => {
//     console.log(pinCode);
//   }, 2000);

//   return () => clearTimeout(getData);
// }, [pinCode]);

// const debounce = (func) => {
//   let timer;

//   return function (...args) {
//     const context = this;
//     if (timer) clearTimeout(timer);

//     timer = setTimeout(() => {
//       timer = null;
//       func.apply(context, args);
//     }, 2000);
//   };
// };

// const setInput = (value) => {
//   console.log(value);
// };

// const optimizedFn = useCallback(debounce(setInput), []);
