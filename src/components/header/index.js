import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default function Header() {
  const user = useSelector(state => state.user.ActiveUser);

  return (
    <>
      <nav>
        <h1>{user}</h1>

        <Link to={"/newtask"}>New</Link>
      </nav>
    </>
  );
}
