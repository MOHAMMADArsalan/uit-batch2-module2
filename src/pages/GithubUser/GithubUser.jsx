import { useState } from "react";
import { connect } from "react-redux";
import { getGithubUserByName } from "../../store/actions/userActions";

const Github = ({ getUserByName, userProfile, loading }) => {
  const [userName, setUserName] = useState('');

  const getUserProfile = () => {
    getUserByName(userName);
  };

  console.log("userProfile", userProfile);
  const getContent = () => {
    if(loading) {
      return <h2>Loading...</h2>;
    } else if (userProfile === null) {
      return <h2>Find github user</h2>;
    } else {
      return <h2>{userProfile.login}</h2>;
    }
  };
  return (
    <div>
      <input value={userName} type="text" onChange={(event) => setUserName(event.target.value)} />
      <button onClick={getUserProfile}>Get Profile</button>

      {getContent()}
    </div>
  );
};

function mapStateToProps (state) {
  return {
    userProfile: state.user.githubUser,
    loading: state.user.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getUserByName: (name) => {
      dispatch(getGithubUserByName(name));
    }
  };
}
const myConnect = connect(mapStateToProps, mapDispatchToProps);
const MyGithub = myConnect(Github);
export default MyGithub;