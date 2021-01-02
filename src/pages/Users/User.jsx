import { Link } from "react-router-dom";
import { users } from "../../data/user";
const User = () => {
  return (
    <div>
      <h1>User Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><Link to={{
                pathname: `/user/${user.id}`,
                state: user
              }}>View Detail</Link></td>
            </tr>;
          })}
        </tbody>
      </table>

    </div>
  );
};

export default User;