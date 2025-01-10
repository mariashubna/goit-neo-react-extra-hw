import css from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";
import { useId } from "react";

export const LoginForm = ({ submit }) => {
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field name="email" id={emailId} />
        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>
        <Field name="password" id={passwordId} />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
