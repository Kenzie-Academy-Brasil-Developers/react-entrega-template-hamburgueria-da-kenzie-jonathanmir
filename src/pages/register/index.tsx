import React, { useContext, useEffect } from "react";
import { RegisterForm } from "../../components/Form/Register";
import logo from "../../assets/logo.svg"
import { FaShoppingBag } from "react-icons/fa";
import { StyledRegister } from "./style";
import { AuthContext } from "../../contexts/AuthContext";

export interface iRegisterFormData {
  name: string,
  email: string,
  password: string
}
export const Register = () => {

  const { loading, setLoading, loadUser } = useContext(AuthContext)

  useEffect(() => {
    setLoading(false)
    loadUser()
  }, [])

  if (loading) {
    return null
  }

  return (<>
    <StyledRegister>
      <div className="slogan-section">
        <img src={logo} alt="" />
        <div className="slogan-div">
          <div >
            <>
              <FaShoppingBag />
            </>
          </div>
          <p>
            A vida é como um sanduíche, é preciso reacheá-la com os   <span> melhores </span> ingredientes</p>
        </div>
      </div>
      <section>
        <RegisterForm></RegisterForm>
      </section>
    </StyledRegister>
  </>)






};
