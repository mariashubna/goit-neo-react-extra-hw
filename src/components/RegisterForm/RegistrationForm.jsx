// import css from "./RegisterForm.module.css";
import { Field, Form, Formik } from "formik";
import { useId } from "react";

export const RegistrationForm = ({ submit }) => {
  const handleSubmit = (values, actions) => {
    submit(values);

    actions.resetForm();
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      // className={css.form}
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameId}>Username</label>
        <Field name="name" id={nameId} />
        <label htmlFor={emailId}>Email</label>
        <Field name="email" id={emailId} />
        <label htmlFor={passwordId}>Password</label>
        <Field name="password" id={passwordId} />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
