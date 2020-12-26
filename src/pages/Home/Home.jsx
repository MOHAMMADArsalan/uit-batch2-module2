import { useHistory } from "react-router-dom";
// https://www.google.com/search?q=pakistan&oq=pakistan&aqs=chrome.0.69i59j69i61l3.2219j0j7&sourceid=chrome&ie=UTF-8
const Home = () => {
  const history = useHistory();
  const goToAboutPage = () => {
    history.push('/about');
  };

  console.log(history);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAboutPage}>About</button>
    </div>
  );
};

export default Home;