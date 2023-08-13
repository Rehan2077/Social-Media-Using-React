import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const signUserOut = async () => {
    await signOut(auth);
  };

  const [user] = useAuthState(auth);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#90909b",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        {user ? (
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#90909b",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/createpost"
            >
              Create Post
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#90909b",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/login"
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
      {user && (
        <ul>
          <li>{user?.displayName}</li>
          <li>
            <img
              src={user?.photoURL || ""}
              width="40"
              height="40"
              style={{ borderRadius: "50%" }}
              alt="Profile Pic"
            />
          </li>
          <button onClick={signUserOut}>Log out</button>
        </ul>
      )}
      {/* <ul>
        <li>{auth.currentUser?.displayName}</li>
        <li>
          <img
            src={auth.currentUser?.photoURL || ""}
            width="40"
            height="40"
            style={{ borderRadius: "50%" }}
            alt="Profile Pic"
          />
          <button onClick={signUserOut}>Log out</button>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
