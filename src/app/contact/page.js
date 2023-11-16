"use client"
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from './page.module.scss';

const Contact = () => {
  const [warning, setWarning] = useState('');

  const postman = (values, event) => {
    event.preventDefault();
    alert('Submitted');
  };

  const isFormValid = (values) => {
    if (!values.name || !values.email || !values.subject || !values.message) {
      setWarning('Please fill in all required fields.');
      return false;
    }

    setWarning('');
    return true;
  };

  return (
    <div className={styles.supermain}>
      <div className={styles.main}>
        <h1>Contact Us</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          onSubmit={(values, { resetForm }) => {
            if (isFormValid(values)) {
              postman(values, resetForm);
            }
          }}
        >
          {() => (
            <Form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className={styles.error} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className={styles.error} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject:</label>
                <Field type="text" id="subject" name="subject" />
                <ErrorMessage name="subject" component="div" className={styles.error} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <Field as="textarea" id="message" name="message" rows="4" />
                <ErrorMessage name="message" component="div" className={styles.error} />
              </div>
              {warning && <div className={styles.warning}>{warning}</div>}
              <button className={styles.submitButton} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
