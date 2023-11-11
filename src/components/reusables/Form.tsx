import React from "react";

import { Button, FormGroup } from ".";

export interface Field {
  type: string;
  name: string;
  label?: string;
}

interface FormProps {
  title: string;
  text?: string;
  buttonText: string;
  fields: Field[];
  action: (formData: FormData) => Promise<any>;
  formData?: Record<string, string>;
  className?: string;
}

const Form: React.FC<FormProps> = ({
  title,
  text,
  buttonText,
  fields,
  action,
  formData,
  className,
}) => {
  return (
    <form
      className={`flex w-[475px] max-w-full flex-col rounded-[20px] ${
        className ? className : ""
      }`}
      action={action}
    >
      <h1
        className={`${
          !text ? "mb-[50px]" : ""
        } text-center text-[22px] font-semibold uppercase leading-normal text-black`}
      >
        {title}
      </h1>
      {text && (
        <p className={`mb-[50px] mt-[9px] text-center text-sm text-gray`}>
          {text}
        </p>
      )}
      {fields.map((field, idx) => (
        <FormGroup
          key={idx}
          {...field}
          defaultValue={formData?.[field.name] || ""}
          last={fields.length - 1 === idx}
        />
      ))}
      <Button type="submit" className="mt-[30px] uppercase">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
