import { Fragment } from "react";
import Head from 'next/head';
import Contact from "../Components/Contact/contact";


export default function contact() {
  return (
    <Fragment>
    <Head>
     <title>Contact me</title>
      <meta name="description" content="send me your mesaage"/>
    </Head>
      <Contact />
    </Fragment>
  )
}
