import { useState } from "react";
import UserInput from "../userInput/UserInput";
import "./UsersList.css";
const UsersList = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Jake",
      Age: 13,
    },
    {
      id: "u2",
      name: "Dustin",
      Age: 14,
    },
    {
      id: "u3",
      name: "Mike",
      Age: 15,
    },
  ];

  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <ul>
        {users.map((user) => (
          <li key={user?.id}>
            Name: {user?.name} Age:{user?.Age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
