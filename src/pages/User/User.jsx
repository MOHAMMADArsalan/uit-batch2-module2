import { useParams, useHistory } from "react-router-dom";
import { getUserById } from "../../data/user";

const User = (props) => {

  const params = useParams();
  const history = useHistory();
  const user = history.location.state || getUserById(params.userId);
  console.log(props, 'users ');
  if (!user) {
    return (
      <div>
        <h1>User Not Found!</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {user.id}</p>
    </div>
  );
};


export default User;