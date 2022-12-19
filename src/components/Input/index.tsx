import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldError, StyledInput } from "./style";
import React from "react";

interface iInputProps {
  label: string,
  type: "text" | "email" | "password",
  placeholder: string,
  error?: FieldError,
  register: UseFormRegisterReturn
}

export function Input({ label, type, placeholder, error, register }: iInputProps) {
  return (
    <StyledInput>
      <fieldset>
        <label className="headline">{label}</label>
        <input data-error={error} type={type} placeholder={placeholder} {...register} />
        {error && <StyledFieldError>{error?.message}</StyledFieldError>}

      </fieldset>
    </StyledInput>

  );
}

export default Input;
