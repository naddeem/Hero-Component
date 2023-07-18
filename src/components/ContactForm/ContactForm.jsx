import React from 'react';
import Button from "../Button/Button";
import { BiCommentDetail } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, serName] = useState(" ");
  const [email, serEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    serName(event.target[0].value);
    serEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log(name, email, text);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPORT CHAT"
            icon={<BiCommentDetail fontSize="24px" />}
            fontSize="24px"
          />

          <Button
            text="VIA CALL FORM"
            icon={<FiPhone fontSize="24px" />}
            fontSize="24px"
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL"
          icon={<HiMail fontSize="24px" />}
          fontSize="24px"
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name </label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" rows="10" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}>
            <Button text="SUBMIT BUTTON" fontSize="24px" />
          </div>
          <div>
            {"Thank you " +
              name +
              " We received your Information " +
              text +
              " We will informe you on Email " +
              email}
          </div>
        </form>
      </div>
      <div className={styles.form_Image}>
        <img src="../../../public/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
