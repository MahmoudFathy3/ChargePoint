import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const ContextUser = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handlerUsers = ({ email, data }) => {
    let email2 = email && email;
    let AllUsers = data && data;

    console.log("Email: " + email2);
    console.log("AllUsers: " + AllUsers);

    // if (data && email) {
    //   console.log("hey 2");

    //   setUser(data.find((user) => user.email === email));
    // }
  };

  const values = { user, setUser, handlerUsers };

  return <ContextUser.Provider value={values}>{children}</ContextUser.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, ContextUser };
