import { useEffect, useState } from "react";
import Post from "./components/Post";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(err => console.error("Fel vid hämtning av posts:", err));
  }, []);

  return (
    <div>
      <h1>Blogginlägg</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
