import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/Input";
import { AuthContext } from "../../contexts/AuthContext";
import * as yup from "yup";
import { StyledLogin } from "./style";
import logo from "../../assets/logo.svg"
import { FaShoppingBag } from "react-icons/fa"
import { LoginForm } from "../../components/Form/Login";

export interface iUserLoginData {
  email: string,
  password: string,
}
export const Login = () => {
  const { user, loadUser, loading, setLoading } = useContext(AuthContext)

  useEffect(() => {
    setLoading(false)
    loadUser()
  }, [])

  if (loading) {
    return null
  }
  return (
    <>
      <StyledLogin className="container">
        <div className="slogan-section">
          <img src={logo} alt="" />
          <div className="slogan-div">
            <div>
              <>
                <FaShoppingBag />
              </>
            </div>
            <p>
              A vida é como um sanduíche, é preciso reacheá-la com os   <span> melhores </span> ingredientes</p>
          </div>
        </div>
        <section>
          <LoginForm></LoginForm>
        </section>
      </StyledLogin>
    </>
  );
};
