import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "John",
      profilePic:
        "https://kidsstorie.com/wp-content/uploads/2023/03/aryabarman_Once_upon_a_time_in_a_far-off_land_there_was_a_littl_9ac60462-eaf6-4c06-9792-36460e4005dc.png",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation for `children`
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
