import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { iUserLoginData } from '../../../pages/login'
import Input from '../../Input'
import { StyledForm } from './styled'
import * as yup from "yup";


export const LoginForm = () => {
    const [formData, setFormData] = useState(null);
    const { userLogin, user, loading } = useContext(AuthContext);

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<iUserLoginData>({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction: SubmitHandler<iUserLoginData> = (data) => {
        userLogin(data)
        reset();
    };

    useEffect(() => {
        if (formData) {
            userLogin(formData)
        }
    }, [formData]);


    return (
        <StyledForm>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
                <>
                    <h3 className="title1">Login</h3>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Digite aqui o seu email..."
                        register={register("email")}
                        error={errors.email} />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite aqui sua senha..."
                        register={register("password")}
                        error={errors.password}
                    ></Input>
                    <button type="submit">Logar</button>
                </>
            </form>

            <p className="headline info-reg">Crie sua conta para saborear muitas delícias e matar sua fome!</p>
            <Link className="link-register" to="/register">
                Cadastrar
            </Link>
        </StyledForm>
    )
}


