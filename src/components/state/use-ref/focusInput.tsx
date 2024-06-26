import { useRef } from "react";

const FocusInputExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on the input element
  const focusOnInput = () => {
    const error = true;
    if (error) {
      inputRef?.current?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <button
        onClick={focusOnInput}
        className="bg-gray-500 text-gray-900 hover:bg-gray-300 p-2 rounded-sm"
      >
        Focus on input
      </button>
      {/* Passing ref as prop to input element, notice that we pass the ref itself and not the current */}
      <input
        ref={inputRef}
        className="px-2 py-3 rounded-sm bg-gray-200 text-gray-900 outline-none focus:outline-3 focus:outline-red-700"
        type="text"
        placeholder="Focus on me..."
      />
    </div>
  );
};

export default FocusInputExample;
