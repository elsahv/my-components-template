import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { RiMailSendLine } from "react-icons/ri"; /* ---- REACT ICONS*/

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const form = useRef();

  const valuesSchema = Yup.object({
    name: Yup.string()
      .min(3, "min 2 characters")
      .max(32, "max 32 characters")
      .required("please write your name"),
    email: Yup.string()
      .email("incorrect email")
      .max(32, "max 32 characters")
      .required("Please write your email"),
    message: Yup.string(),
  });
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  /*EMAILJS KEYS ----------*/
  const publicID = "wvG3dmQ14bk6j8hBg";
  const templateID = "template_ua2cv0e";
  const serviceID = "service_ut5syhh";

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      validationSchema: valuesSchema,
      initialValues,
      onSubmit: (values, actions) => {
        try {
          emailjs
            .sendForm(serviceID, templateID, form.current, publicID, values)
            .then(() => {
              actions.resetForm();
              setSuccessMessage(true);
              setTimeout(() => setSuccessMessage(false), 3600);
              console.log("message sent");
            });
        } catch (error) {
          console.log(error);
        }
      },
    });
  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        {/* NAME */}
        <label>
          {errors.name && touched.name ? (
            <div style={{ color: "red" }}>{errors.name}</div>
          ) : (
            ""
          )}
        </label>
        <input
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter name"
        />

        {/* EMAIL */}
        <label>
          {errors.email && touched.email ? (
            <div style={{ color: "red" }}>{errors.email}</div>
          ) : (
            ""
          )}
        </label>
        <input
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter email"
        />

        {/* MESSAGE */}
        <textarea
          value={values.message}
          onBlur={handleBlur}
          onChange={handleChange}
          id="message"
          name="message"
          placeholder="Enter Message"
        />

        {/* BUTTON */}
        <input type="submit" value="enter" />
        {successMessage && (
          <p style={{ background: "blue" }}>
            <RiMailSendLine size={20} />
            Message Sent
          </p>
        )}
      </form>
    </>
  );
};

export default ContactForm;
