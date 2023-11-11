"use client";

import React, { useState, FC } from "react";

import { Form, Modal } from ".";
import { Field } from "./Form";

interface ConnectModalFormProps {
  title: string;
  text?: string;
  buttonText: string;
  OpenComponent: React.ReactElement<{ onClick: () => void }>;
  fields: Field[];
  action: (currentState: string, formData: FormData) => Promise<string | void>;
  formData?: Record<string, string>;
}

const ConnectModalForm: FC<ConnectModalFormProps> = ({
  title,
  text,
  buttonText,
  OpenComponent,
  fields,
  action,
  formData,
}) => {
  const [isOpen, setOpen] = useState(0);

  return (
    <Modal OpenComponent={OpenComponent} closeModalForce={isOpen}>
      <Form
        title={title}
        text={text}
        buttonText={buttonText}
        fields={fields}
        action={action}
        formData={formData}
        cb={() => setOpen(Math.random())}
      />
    </Modal>
  );
};

export default ConnectModalForm;
