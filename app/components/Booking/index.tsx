'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Wrapper } from '../Wrapper'
import { FormItem } from './FormItem'
import { FormButton } from './FormButton'

import styles from './Booking.module.css'

interface IProps {
  bookingTitle: string
  bookingName: string
  bookingEmail: string
  bookingNationality: string
  bookingTravelers: string
  bookingDate: string
  bookingTime: string
  bookingAddress: string
  bookingAdditional: string
  bookingGuide: string
  bookingButton: string
}

const Booking = ({
  bookingTitle,
  bookingName,
  bookingEmail,
  bookingNationality,
  bookingTravelers,
  bookingDate,
  bookingTime,
  bookingAddress,
  bookingAdditional,
  bookingGuide,
  bookingButton,
}: IProps) => {
  const [check, setCheck] = React.useState(false)

  const schema = yup
    .object()
    .shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      nationality: yup.string().required(),
      travelers: yup.string().required(),
      date: yup.string().required(),
      time: yup.string().required(),
      address: yup.string().required(),
      additional: yup.string(),
    })
    .required()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    const body = {
      name: data.name,
      email: data.email,
      nationality: data.nationality,
      travelers: data.travelers,
      date: data.date,
      time: data.time,
      address: data.address,
      additional: data.additional,
      guide: check ? 'yes' : 'no',
    }

    await fetch('/api/booking', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status === 200) {
        reset()
      }
    })
  }

  return (
    <section className={styles.container}>
      <Wrapper classes={styles.wrapper}>
        <h3 className={styles.h3}>{bookingTitle}</h3>
        <div className={styles.divider} />

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <FormItem register={register} errors={errors} name="name" label={bookingName} />

          <FormItem register={register} errors={errors} name="email" label={bookingEmail} />

          <FormItem
            register={register}
            errors={errors}
            name="nationality"
            label={bookingNationality}
          />

          <FormItem register={register} errors={errors} name="travelers" label={bookingTravelers} />

          <FormItem register={register} errors={errors} name="date" label={bookingDate} />

          <FormItem register={register} errors={errors} name="time" label={bookingTime} />

          <FormItem register={register} errors={errors} name="address" label={bookingAddress} />

          <FormItem
            register={register}
            errors={errors}
            name="additional"
            label={bookingAdditional}
          />

          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="checkbox"
              checked={check}
              onChange={() => setCheck((prevState) => !prevState)}
              className={styles.checkbox_input}
            />
            <label htmlFor="checkbox" className={styles.checkbox_label}>
              {bookingGuide}
            </label>
          </div>

          <div className={styles.fees}>
            <FormButton bookingButton={bookingButton} />
          </div>
        </form>
      </Wrapper>
    </section>
  )
}

export { Booking }
