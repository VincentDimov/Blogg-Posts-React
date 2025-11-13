import { useState, useEffect } from "react";
import UserInfo from "./UserInfo";

export default function Post({ post }) {
  const [showUser, setShowUser] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((err) => console.error("Fel vid hämtning av kommentarer:", err));
    }
  }, [showComments, post.id]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <button onClick={() => setShowUser(!showUser)}>
        {showUser ? "Dölj användarinformation" : "Visa användarinformation"}
      </button>

      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Dölj kommentarer" : "Visa kommentarer"}
      </button>

      {showUser && <UserInfo userId={post.userId} />}

      {showComments && (
        <div>
          <h3>Kommentarer:</h3>
          {comments.length > 0 ? (
            comments.map(comment => (
              <div key={comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <p>{comment.email}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Inga kommentarer...</p>
          )}
        </div>
      )}
    </div>
  );
}
