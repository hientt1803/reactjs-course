import { forwardRef, useRef } from "react";
// Define ref type the component accepts
// Define ref type the component accepts
type Ref = HTMLInputElement;

const MyInput = forwardRef<Ref>((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (!inputRef) return;
    inputRef?.current?.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
