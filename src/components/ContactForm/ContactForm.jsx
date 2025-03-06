import s from "../ContactForm/ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";

import SearchBox from "../SearchBox/SearchBox";

import { addContact } from "../../redux/contacts/operations";

import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { IconContext } from "react-icons";
import toast from "react-hot-toast";



const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required!"),

  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Phone is Required!"),
});

export default function ContactForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact successfully added!");
      })
      .catch(() => {
        toast.error(
          "Oops! Some problem with the contact!"
        );
      });
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <Formik
          initialValues={{ name: "", number: "" }}
          validationSchema={UserSchema}
          onSubmit={handleAddContact}
        >
          <Form className={s.form}>
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
              <ErrorMessage
                className={s.error}
                name="name"
                component="span"
              />
            </div>

            <div>
              <label
                className={s.formInputLabel}
                htmlFor={`${fieldId}-number`}
              >
                Number
              </label>
              <div className={s.iconPosition}>
                <Field
                  className={s.input}
                  type="tel"
                  name="number"
                  pattern="(\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                   title="Use this format 380505558822  or 38-050-555-8822 or 38 050 555 8822, min 10 numbers."
                  id={`${fieldId}-number`}
                />
                <span className={s.inputIcon}>
                  <FaPhone />
                </span>
              </div>
              <ErrorMessage
                className={s.error}
                name="number"
                component="span"
              />
            </div>
            <button className={s.btn} type="submit">
   {/* малюю коло навколо IoAdd */}
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "1.5em",
                }}
              >
                <IoAdd className={s.icon} />
              </IconContext.Provider>
						</button>				
						<SearchBox/>	
          </Form>
				</Formik>			
			</div>			
     </div>
  );
}