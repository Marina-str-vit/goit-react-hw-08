import s from '../LoginForm/LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { IconContext } from 'react-icons';
import { IoIosLock } from 'react-icons/io';
import { SiMaildotru } from 'react-icons/si';

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is Required'),
  password: Yup.string()
    .min(10, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Password is Required!'),
});

export default function LoginForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success('Login successful!');
      })
      .catch(() => {
        toast.error("Oops! Looks like there's a problem with the login!");
      });
    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={UserSchema}
          onSubmit={handleSubmit}
        >
          <Form className={s.form}>
            <p className={s.formTitle}>Login Page</p>
            <div className={s.formFields}>
              <label className={s.formInputLabel} htmlFor={`${fieldId}-email`}>
                Email
              </label>
              <div className={s.iconPosition}>
                <Field
                  className={s.input}
                  type="email"
                  name="email"
                  id={`${fieldId}-email`}
                />
                <span className={s.inputIcon}>
                  <SiMaildotru />
                </span>
              </div>
              <ErrorMessage className={s.error} name="email" component="span" />
            </div>

            <div>
              <label
                className={s.formInputLabel}
                htmlFor={`${fieldId}-password`}
              >
                Password
              </label>
              <div className={s.iconPosition}>
                <Field
                  className={s.input}
                  type="text"
                  name="password"
                  id={`${fieldId}-password`}
                />
                <span className={s.inputIcon}>
                  <IconContext.Provider
                    value={{
                      size: '1.5em',
                    }}
                  >
                    <IoIosLock />
                  </IconContext.Provider>
                </span>
              </div>
              <ErrorMessage
                className={s.error}
                name="password"
                component="span"
              />
            </div>

            <button className={s.btn} type="submit">
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
