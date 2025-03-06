import s from '../RegistrationForm/RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FaUser } from 'react-icons/fa6';
import { SiMaildotru } from 'react-icons/si';
import { IoIosLock } from 'react-icons/io';
import toast from 'react-hot-toast';
import { IconContext } from 'react-icons';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is Required'),
  password: Yup.string()
    .min(10, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Password is Required!'),
});

export default function RegistrationForm() {
  const fieldId = useId();

  const dispatch = useDispatch();

  const handleRegisterContact = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Account created successfully!');
      })
      .catch(() => {
        toast.error('Oops! Some problems with the registration process!');
      });
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={UserSchema}
          onSubmit={handleRegisterContact}
        >
          <Form className={s.form}>
            <p className={s.formTitle}>Create account?</p>
            <div className={s.formFields}>
              <label className={s.formInputLabel} htmlFor={`${fieldId}-name`}>
                Name
              </label>

              <div className={s.iconPosition}>
                <Field
                  className={s.input}
                  type="text"
                  name="name"
                  id={`${fieldId}-name`}
                />
                <span className={s.inputIcon}>
                  <FaUser />
                </span>
              </div>
              <ErrorMessage className={s.error} name="name" component="span" />
            </div>

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
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
