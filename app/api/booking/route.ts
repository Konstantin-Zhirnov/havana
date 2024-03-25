import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  require('dotenv').config()

  const body = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: 'kostya.zhirnov@gmail.com',
      // to: 'amramcueva1971@gmail.com',
      to: 'zhirnov-11.06@mail.ru',
      subject: 'Booking from website',
      html: `<div><b>Booking from website: havana-classic-cars.com</b></div>
          <p><b>Name:</b> ${body.name}<br/>
          <b>Email:</b> ${body.email}<br/>
          <b>Nationality:</b> ${body.nationality}<br/>
          <b>Travelers:</b> ${body.travelers}<br/>
          <b>Date:</b> ${body.date}<br/>
          <b>Time:</b> ${body.time}<br/>
          <b>Address:</b> ${body.address}<br/>
          <b>Additional:</b> ${body.additional}<br/>
          <b>Guide:</b> ${body.guide}</p>`,
    })
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ error: error.message || error.toString() })
  }
  return NextResponse.json({ message: 'Success!' })
}
