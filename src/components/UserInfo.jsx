import { useEffect, useState } from "react";

export default function UserInfo({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Fel vid hämtning av användare:", err));
    }, [userId]);

  if (!user) return <p>Laddar användarinformation...</p>;

  return (
    <div>
      <p>Användarnamn: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Stad: {user.address.city}</p>
    </div>
  );
}