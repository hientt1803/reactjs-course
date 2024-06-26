const EventExample = () => {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick()}>Click me 2</button>
      <button
        onClick={function handleClick2() {
          alert("click 3");
        }}
      >
        Click me 3
      </button>
    </>
  );
};

export default EventExample;
