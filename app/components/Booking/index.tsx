'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import * as yup from 'yup'

import { Wrapper } from '../Wrapper'
import { FormItem } from './FormItem'
import { FormButton } from './FormButton'
import { LanguageProps } from '../../types'

import styles from './Booking.module.css'

const Booking = ({ language }: LanguageProps) => {
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

  const backgroundAnimation = {
    hidden: {
      background: 'transparent',
      opacity: 0,
      y: 40,
    },
    visible: {
      background: '#3f4a5c',
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const textAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 1 },
    },
  }

  const getTitle = () => {
    switch (language) {
      case 'En':
        return 'Booking Information'
      case 'Es':
        return 'Información de Reserva'
      case 'Fr':
        return 'Informations de Réservation'
      case 'Ge':
        return 'Buchungsinformationen'
    }
  }

  const getName = () => {
    switch (language) {
      case 'En':
        return 'Full Name:'
      case 'Es':
        return 'Nombre Completo:'
      case 'Fr':
        return 'Nom Complet:'
      case 'Ge':
        return 'Vollständiger Name:'
    }
  }

  const getEmail = () => {
    switch (language) {
      case 'En':
        return 'Email:'
      case 'Es':
        return 'Correo Electrónico:'
      case 'Fr':
        return 'Courriel:'
      case 'Ge':
        return 'Email:'
    }
  }

  const getNationality = () => {
    switch (language) {
      case 'En':
        return 'Nationality:'
      case 'Es':
        return 'Nacionalidad:'
      case 'Fr':
        return 'Nationalité:'
      case 'Ge':
        return 'Nationalitaet:'
    }
  }

  const getTravelers = () => {
    switch (language) {
      case 'En':
        return 'Number of travelers:'
      case 'Es':
        return 'Número de viajeros:'
      case 'Fr':
        return 'Nombre de voyageurs:'
      case 'Ge':
        return 'Anzahl der Reisenden:'
    }
  }

  const getDate = () => {
    switch (language) {
      case 'En':
        return 'Pick Up Date:'
      case 'Es':
        return 'Fecha de Recogida:'
      case 'Fr':
        return 'Date de Prise En Charge:'
      case 'Ge':
        return 'Abholdatum:'
    }
  }

  const getTime = () => {
    switch (language) {
      case 'En':
        return 'Pick Up Time:'
      case 'Es':
        return 'Hora de Recogida:'
      case 'Fr':
        return 'Heure de Prise En Charge:'
      case 'Ge':
        return 'Abholzeit:'
    }
  }

  const getAddress = () => {
    switch (language) {
      case 'En':
        return 'Pick Up Address:'
      case 'Es':
        return 'Dirección de Recogida:'
      case 'Fr':
        return 'Adresse de Ramassage:'
      case 'Ge':
        return 'Adresse abholen:'
    }
  }

  const getAdditional = () => {
    switch (language) {
      case 'En':
        return 'Additional information or Request:'
      case 'Es':
        return 'Información adicional o Solicitud:'
      case 'Fr':
        return 'Informations supplémentaires ou Demande:'
      case 'Ge':
        return 'Zusätzliche Informationen oder Anfrage:'
    }
  }

  const getGuide = () => {
    switch (language) {
      case 'En':
        return 'Include the guide service on the route.'
      case 'Es':
        return 'Incluir el servicio de guía en la ruta.'
      case 'Fr':
        return "Inclure le service de guide sur l'itinéraire."
      case 'Ge':
        return 'Fügen Sie den Reiseleiterservice auf der Route hinzu.'
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={backgroundAnimation}
      className={styles.container}
    >
      <Wrapper classes={styles.wrapper}>
        <motion.h3
          className={styles.h3}
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          viewport={{ once: true }}
        >
          {getTitle()}
        </motion.h3>
        <div className={styles.divider} />

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <FormItem register={register} errors={errors} name="name" label={getName()} />
          <FormItem register={register} errors={errors} name="email" label={getEmail()} />
          <FormItem
            register={register}
            errors={errors}
            name="nationality"
            label={getNationality()}
          />
          <FormItem register={register} errors={errors} name="travelers" label={getTravelers()} />
          <FormItem register={register} errors={errors} name="date" label={getDate()} />
          <FormItem register={register} errors={errors} name="time" label={getTime()} />
          <FormItem register={register} errors={errors} name="address" label={getAddress()} />
          <FormItem register={register} errors={errors} name="additional" label={getAdditional()} />
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="checkbox"
              checked={check}
              onChange={() => setCheck((prevState) => !prevState)}
              className={styles.checkbox_input}
            />
            <label htmlFor="checkbox" className={styles.checkbox_label}>
              {getGuide()}
            </label>
          </div>

          <div className={styles.fees}>
            <FormButton />
          </div>
        </form>
      </Wrapper>
    </motion.section>
  )
}

export { Booking }
