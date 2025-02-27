import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import { useId } from "react";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };
  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(onlyLetters, 'Only Letters')
      .trim(),
    number: Yup.number()
      .required('Required')
  });

    const nameId = useId();
    const numberId = useId();

    const onSubmit = (values, options) => {
        values.id = crypto.randomUUID();
          dispatch(addContact(values));
          options.resetForm();
    };


  return (
    <section className={s.formWrapper}>
    <Formik
      initialValues={initialValues}
      validationSchema={applySchema}
      onSubmit={onSubmit}>
      <Form className={s.form}>
        <div className={s.formFields}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={nameId}       
          />
          <ErrorMessage className={s.error} name="name" component="div" />
        </div>
        <div className={s.formFields}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={s.input}
            type="tel"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={s.error} name="number" component="div" />
        </div>
          <button className={s.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
    </section>
  );
}

export default ContactForm;