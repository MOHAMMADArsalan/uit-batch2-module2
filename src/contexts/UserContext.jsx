import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = (props) => {

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "User 1",
    email: "user1@gmail.com"
  });

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then(res => setUsers(res.data))
      .catch((error) => { console.log(error); });
  }, []);

  const getUserDetails = () => {
    fetch();
  };

  const updateUser = ({ id, ...rest }) => {
    axios.put(`http://localhost:8000/update-user/${id}`, rest)
      .then((res) => {
        const newUsers = [...users];
        newUsers.splice(id, 1, rest);
        setUsers(newUsers)
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const onDeleteUser = (id) => {
    axios.delete(`http://localhost:8000/delete-user/${id}`)
      .then((res) => {
        const newUsers = [...users];
        newUsers.splice(id, 1);
        setUsers(newUsers)
      })
      .catch((error) => {
        console.log(error);
      })
  };
  const userValue = {
    currentUser: currentUser,
    users: users,
    isLoggedIn: false,
    // updateUser: (newUser) => {
    //   setCurrentUser(newUser);
    // },
    updateUser,
    onDeleteUser,
    addNewUser: () => {
      const body = {
        firstName: "User",
        lastName: users.length + 1,
        email: `user${users.length + 1}@gmail.com`
      };
      axios.post('http://localhost:8000/create-user', body)
        .then((res) => {
          const newUsers = [...users];
          newUsers.push(body);
          setUsers(newUsers);
          console.log(res);
        })
        .catch((error) => console.log(error));
      // const newUsers = [...users];
      // newUsers.push({
      //   name: `user ${newUsers.length + 1}`,
      //   email: `user${newUsers.length + 1}@gmail.com`
      // });
      // setUsers(newUsers);
    }
  };
  return (
    <UserContext.Provider value={userValue}>
      <h1>User Provider</h1>
      {props.children}
    </UserContext.Provider>
  );
};