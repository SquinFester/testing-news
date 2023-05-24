import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <button onClick={() => navigate("products")}>see all products</button>
    </div>
  );
};

export default Home;
