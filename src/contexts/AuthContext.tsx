import { AxiosError } from "axios";
import { error } from "console";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iUserLoginData } from "../pages/login";
import { api } from "../services/api";
import { iRegisterFormData } from "../pages/register";

export const AuthContext = createContext({} as iAuthContext)
interface iUserProviderProps {
    children: React.ReactNode
}
export interface iUser {
    email: string;
    name: string;
    id: number;
}

interface iResponse {
    accessToken: string;
    user: iUser;
}

interface iAutoLoginResponse {
    email: string;
    password: string;
    name: string;
    id: number;
}


interface iAuthContext {
    user: iUser | null;
    setUser: (user: iUser) => void;
    userLogin: (formData: iUserLoginData) => void;
    userRegister: (formData: iRegisterFormData) => void;
    userLogout: () => void;
    loadUser: () => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthProvider = ({ children }: iUserProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<iUser | null>(null)
    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    async function loadUser() {
        const token = localStorage.getItem("token");
        const id = (localStorage.getItem("uId"));
        if (token) {
            try {
                setLoading(true)
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                const response = await api.get<iAutoLoginResponse>(`users/${id}`);
                setUser(response.data)
                navigate("/dashboard")
                setLoading(false);
            }
            catch (err) {
                console.error(err)
                window.localStorage.clear();
                navigate("/")
            } finally {
                setLoading(false);
                navigate("/dashboard")
            }
        }
    }


    const userLogin = async (formData: iUserLoginData) => {
        try {
            setLoading(true)
            const response = await api.post<iResponse>("login", formData)
            localStorage.setItem("token", response.data.accessToken)
            localStorage.setItem("uId", JSON.stringify(response.data.user.id))
            setUser(response.data.user)
            navigate("/dashboard")
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setLoading(false)
        }
    }

    async function userRegister(formData: iRegisterFormData) {

        try {
            setLoading(true)
            const response = await api.post<iResponse>("users", formData)
        }
        catch (err) {
            // const currentError = error as unknown as AxiosError<iRequestError>
            // toast.error(currentError.response?.data.error);
        }
        finally {
            setLoading(false)
            navigate("/login")
        }
    }

    function userLogout() {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{
            loadUser,
            loading, setLoading, user, setUser, userLogin, userRegister, userLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}