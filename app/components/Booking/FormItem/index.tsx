import React from 'react'

import { ErrorMessage } from '@hookform/error-message'

import styles from './FormItem.module.css'

interface IProps {
  register: any
  errors: any
  name: string
  label: string
}

const FormItem: React.FC<IProps> = ({ register, name, errors, label }) => {
  const getInput = () => {
    switch (name) {
      case 'date':
        return (
          <input
            id={name}
            type="date"
            {...register(name)}
            autoComplete="off"
            className={styles.input}
          />
        )
      case 'time':
        return (
          <input
            id={name}
            type="time"
            {...register(name)}
            autoComplete="off"
            className={styles.input}
          />
        )
      case 'additional':
        return (
          <textarea
            id={name}
            {...register(name)}
            autoComplete="off"
            className={`${styles.input} ${styles.description}`}
          />
        )
      default:
        return <input id={name} {...register(name)} autoComplete="off" className={styles.input} />
    }
  }

  return (
    <div
      className={`${styles.input_container} ${name === 'address' || name === 'additional' ? styles.address : ''}`}
    >
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>

      {getInput()}

      <ErrorMessage
        errors={errors as any}
        name={name}
        render={({ message }) => <p className={styles.error}>{message}</p>}
      />
    </div>
  )
}

export { FormItem }
