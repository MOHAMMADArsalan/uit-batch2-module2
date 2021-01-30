import React from "react";
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
  const user = useUser();
  const updateUser = () => {
    user.updateUser({
      name: "user 2",
      email: "user2@gmail.com"
    });
  };
  return (
    <div>
      <h1>User Page</h1>
      <p>Name: {user.currentUser.name}</p>
      <p>Email: {user.currentUser.email}</p>
      <button onClick={updateUser}>Update User</button>

      <ul>
        {user.users.map((user, index) => <li key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </li>)}
      </ul>
      <button onClick={user.addNewUser}>Add User</button>
    </div>
  );
};

export default User;