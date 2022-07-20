import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase-config";
import { signOut } from "firebase/auth";

const Home = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        setError(true);
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Home;
