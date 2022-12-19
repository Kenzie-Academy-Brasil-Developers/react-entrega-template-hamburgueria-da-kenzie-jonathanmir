import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { iUserLoginData } from '../../../pages/login'
import Input from '../../Input'
import { StyledForm } from './styled'
import * as yup from "yup";
import { formSchema } from './registerSchema'

interface iRegisterFormData {
    name: string,
    email: string,
    password: string,
    passwordConfirmation?: string,
}
export const RegisterForm = () => {
    const [formData, setFormData] = useState(null);
    const { userRegister, user, loading } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<iRegisterFormData>({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction: SubmitHandler<iRegisterFormData> = (data) => {
        delete data.passwordConfirmation;
        userRegister(data)
        reset();
    };

    useEffect(() => {
        if (formData) {
            userRegister(formData)
        }
    }, [formData]);

    const navigate = useNavigate();
    function returnPage() {
        navigate(-1);
    }

    return (
        <StyledForm>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
                <>
                    <div className='form-header'>
                        <h3 className="title1">Cadastro</h3>
                        <a onClick={returnPage}>Retornar para o login</a>
                    </div>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Digite aqui o seu nome..."
                        register={register("name")}
                        error={errors.name} />

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
                    <Input
                        label="Confirmar senha"
                        type="password"
                        placeholder="Confirme sua senha"
                        register={register("passwordConfirmation")}
                        error={errors.passwordConfirmation}
                    ></Input>
                    <button type="submit">Cadastrar</button>
                </>
            </form>
        </StyledForm>
    )
}
