import React from 'react';
import styles from './index.module.scss';
import Input from '../Input';
import Button from '../Button';

const Contact = () => {
  return (
    <div className={styles.form}>
      <div className={styles.title}>get in touch</div>

      <div className={styles.row}>
        <Input
          /*               ref={addressRef} */
          className={styles.input}
          type="text"
          value=""
          placeholder="first name"
          label="first name"
          /*               onChange={handleChange} */
        />
        <Input
          /*               ref={addressRef} */
          className={styles.input}
          type="text"
          value=""
          placeholder="last name"
          label="last name"
          /*               onChange={handleChange} */
        />
      </div>
      <Input
        /*               ref={addressRef} */
        className={styles.input}
        type="text"
        value=""
        placeholder="organization name"
        label="organization name"
        /*               onChange={handleChange} */
      />
      <Input
        /*               ref={addressRef} */
        className={styles.input}
        type="text"
        value=""
        placeholder="email"
        label="email"
        /*               onChange={handleChange} */
      />
      <textarea
        /*               ref={addressRef} */
        className={styles.textarea}
        placeholder="tell us about you"
        label="about you"
        /*               onChange={handleChange} */
      />

      <Button
        type="secondary"
        theme={'light'}
        height={'36px'}
        width={'120px'}
        onClick={() => console.log('clicked')}
        className={styles.button}>
        <div>submit</div>
      </Button>
    </div>
  );
};

Contact.defaultProps = {
  theme: 'dark',
};

export default Contact;
