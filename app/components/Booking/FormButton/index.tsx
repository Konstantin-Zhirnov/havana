import styles from './FormButton.module.css'

interface IProps {
  bookingButton: string
}
const FormButton = ({ bookingButton }: IProps) => {
  return (
    <button type="submit" className={styles.btn}>
      {bookingButton}
    </button>
  )
}

export { FormButton }
