import React from "react";

import { Button, FormGroup } from ".";

interface Field {
  type: string;
  name: string;
  label: string;
  last?: boolean;
}

interface FormProps {
  title: string;
  text?: string;
  buttonText: string;
  fields: Field[];
  action: (formData: FormData) => Promise<any>;
  formData?: Record<string, any>;
}

const Form: React.FC<FormProps> = ({
  title,
  text,
  buttonText,
  fields,
  action,
  formData,
}) => {
  return (
    <form
      className="flex w-[475px] max-w-full flex-col rounded-[20px]"
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
        <p
          className={`${
            !text ? "mb-[50px]" : ""
          } mt-[9px] text-center text-sm text-gray`}
        >
          {text}
        </p>
      )}
      {fields.map((field, index) => (
        <FormGroup
          key={index}
          {...field}
          defaultValue={formData?.[field.name]}
        />
      ))}
      <Button type="submit" className="mt-[30px] uppercase">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
