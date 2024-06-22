import { ChangeEvent, useState } from "react";

const NestedUpdateObject = () => {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image:
        "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bp23tdza9hc2caw35rn.png",
    },
  });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <label>
          Name:
          <input value={person.name} onChange={handleNameChange} />
        </label>
        <label>
          Title:
          <input value={person.artwork.title} onChange={handleTitleChange} />
        </label>
        <label>
          City:
          <input value={person.artwork.city} onChange={handleCityChange} />
        </label>
        <label>
          Image:
          <input value={person.artwork.image} onChange={handleImageChange} />
        </label>
      </div>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
};

export default NestedUpdateObject;
