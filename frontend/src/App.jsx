import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}/users`);

      setUsers(data.data.users);
    }

    getData();
  }, []);

  return (
    <div>
      <h1>User Data</h1>

      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default App;
