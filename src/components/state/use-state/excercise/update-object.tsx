import { ChangeEvent, useState } from "react";

type Iperson = {
  firstName: string;
  lastName: string;
  email: string;
};

const UpdateBbject = () => {
  const [person, setPerson] = useState<Iperson>({
    firstName: "John",
    lastName: "Nathan",
    email: "abc@gmail.com",
  });

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        {/* track johnabca*/}
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default UpdateBbject;
