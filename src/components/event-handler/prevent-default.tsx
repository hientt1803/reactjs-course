export default function Signup() {
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitting!");
  };

  return (
    <form onSubmit={handlesubmit}>
      <input />
      <button>Send</button>
    </form>
  );
}
