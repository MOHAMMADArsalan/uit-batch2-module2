import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "User 1",
    email: "user1@gmail.com"
  });


  const getUserDetails = () => {
    fetch()
  }
  const userValue = {
    currentUser: currentUser,
    users: users,
    isLoggedIn: false,
    updateUser: (newUser) => {
      setCurrentUser(newUser);
    },

    addNewUser: () => {
      const newUsers = [...users];
      newUsers.push({
        name: `user ${newUsers.length + 1}`,
        email: `user${newUsers.length + 1}@gmail.com`
      });
      setUsers(newUsers);
    }
  };
  return (
    <UserContext.Provider value={userValue}>
      <h1>User Provider</h1>
      {props.children}
    </UserContext.Provider>
  );
};