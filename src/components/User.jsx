import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";


// class User extends React.Component {

//   static contextType = UserContext;

//   updateUser = () => {
//     this.context.updateUser({
//       name: "user 2",
//       email: "user2@gmail.com"
//     });
//   };
//   render () {
//     console.log(this);
//     return (
//       <div>
//         <h1>User Page</h1>
//         <p>Name: {this.context.currentUser.name}</p>
//         <p>Email: {this.context.currentUser.email}</p>
//         <button onClick={this.updateUser}>Update User</button>

//         <ul>
//           {this.context.users.map((user, index) => <li key={index}>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//           </li>)}
//         </ul>
//         <button onClick={this.context.addNewUser}>Add User</button>
//       </div>
//     );
//   }
// }

// export default User;

const User = () => {
  const [isEdit, setIsEdit] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const user = useUser();
  const updateUser = () => {
    user.updateUser({
      name: "user 2",
      email: "user2@gmail.com"
    });
  };


  const onEditClick = (index) => {
    if (index !== null) {
      const { firstName, lastName, email } = user.users[index];
      setUserName(`${firstName} ${lastName}`);
      setUserEmail(email);

    }
    setIsEdit(index);
  };

  const onUpdateUser = () => {
    // const [ firstName, ...othersName] = userName.split(" ") //
    const fullNames = userName.split(" ") //
    const firstName = fullNames[0];
    const othersName = fullNames.slice(1);

    const body = {
      firstName,
      lastName: othersName.join(" "),
      email: userEmail,
      id: isEdit
    }

    user.updateUser(body)
    setIsEdit(null);
  }

  const onUserNameChange = (event) => {
    const value = event.target.value;
    setUserName(value);
  };

  const onUserEmailChange = (event) => {
    const value = event.target.value;
    setUserEmail(value);
  };
  console.log(userName);

  const onDeleteUser = (index) => {
    user.onDeleteUser(index);
  }
  return (
    <div>
      <h1>User Page</h1>
      <p>Name: {user.currentUser.name}</p>
      <p>Email: {user.currentUser.email}</p>
      <button onClick={updateUser}>Update User</button>

      <ul>
        {user.users.map((user, index) => <li key={index}>
          <p>Name: {isEdit === index ? <input value={userName} onChange={onUserNameChange} /> : user.firstName + " " + user.lastName}</p>
          <p>Email: {isEdit === index ? <input value={userEmail} onChange={onUserEmailChange} /> : user.email}</p>
          <p>Action:
            <button onClick={() => onDeleteUser(index)}>Delete</button>
           {isEdit !== index ? <button onClick={() => onEditClick(index)}>Edit</button> :
              <button onClick={onUpdateUser}>Update</button>}
            {isEdit === index && <button onClick={() => onEditClick(null)}>Cancel</button>}</p>
        </li>)}
      </ul>
      <button onClick={user.addNewUser}>Add User</button>
    </div>
  );
};

export default User;