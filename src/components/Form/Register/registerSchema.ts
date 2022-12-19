import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*[a-z])/,
      "A senha precisa de no mínimo uma letra minúscula."
    ),
  // .matches(/(?=.*[A-Z])/, "A senha precisa de no mínimo uma letra maiúscula.")
  // .matches(/(?=.*[0-9])/, "A senha precisa de no mínimo um número.")
  // .matches(
  //   /(?=.*[!@#$%^&*])/,
  //   "A senha precisa de no mínimo um caractere especial."
  // )
  // .matches(/(?=.{8,})/, "A senha precisa ter pelo menos 8 caracteres.")
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
});
