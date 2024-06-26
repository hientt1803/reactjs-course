import { useRef } from "react";

const RefBasicExample = () => {
  // Create a ref, name it buttonData, define its type as string or null, set its initial value to null
  // current
  // const [btnDataa, setBtnDataa] = useState("");
  const buttonRef = useRef<string | null>(null);

  const assignValueToRef = () => {
    alert("assined value to button");
    buttonRef.current = "asssinged new value";
  };

  const resetRefValue = () => {
    alert("reset value");
    buttonRef.current = "reset value";
  };

  const printRef = () => {
    console.log(buttonRef.current);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <button
          className="bg-gray-400 hover:bg-gray-200 text-gray-800 p-2 rounded-sm font-semibold"
          onClick={assignValueToRef}
        >
          Assign value
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-200 text-gray-800 p-2 rounded-sm font-semibold"
          onClick={resetRefValue}
        >
          Reset value
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-200 text-gray-800 p-2 rounded-sm font-semibold"
          onClick={printRef}
        >
          Print ref to the console
        </button>
      </div>
    </div>
  );
};

export default RefBasicExample;
