"use client";

import React, { useEffect } from "react";

import { useFormState } from "react-dom";

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
  action: (currentState: string, formData: FormData) => Promise<void>;
  formData?: Record<string, string>;
  className?: string;
  cb?: (randomToBeUnique: number) => void;
}

const Form: React.FC<FormProps> = ({
  title,
  text,
  buttonText,
  fields,
  action,
  formData,
  className,
  cb,
}) => {
  const [message, formAction] = useFormState(
    action as unknown as (state: void | null) => void,
    null,
  );

  useEffect(() => {
    if (cb && message) cb(Math.random());
  }, [message, cb]);

  return (
    <form
      className={`flex w-[475px] max-w-full flex-col rounded-[20px] ${
        className ? className : ""
      }`}
      action={formAction}
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
