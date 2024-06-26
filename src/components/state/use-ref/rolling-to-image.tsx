import { useRef } from "react";

export default function CatFriends() {
  const listRef = useRef<HTMLUListElement>(null);
  // const headerRef = useRef<HTMLDivElement>(null);

  function scrollToIndex(index: number) {
    const listNode = listRef.current;

    if (!listNode) return;

    const imgNode = listNode?.querySelectorAll("li > img")[index];
    
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    
    // cách đơn giản để scroll tới một view nào đó 
    // window.scrollTo({
    //   top: 2400,
    //   left: 2400,
    //   behavior: "smooth",
    // });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li style={{ height: "100vh" }}>
            <img
              src="https://images.unsplash.com/photo-1719242086474-426087b8e0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Tom"
            />
          </li>
          <li style={{ height: "100vh" }}>
            <img
              src="https://images.unsplash.com/photo-1719258264857-9c380d840a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="Maru"
            />
          </li>
          <li style={{ height: "100vh" }}>
            <img
              src="https://images.unsplash.com/photo-1719268921704-202ac52a5308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
