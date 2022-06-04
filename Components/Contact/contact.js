import { useState,useContext} from 'react';
import axios from 'axios';
import classes from './contact.module.css'
import MyAllContext from '../ContextStore/Context';


export default function Contact() {

   const notifiaction = useContext(MyAllContext)



    const inputData={
        email:'',name:'',message:''
    }

    const [input,setInput] =useState(inputData);

    function onChangeHandler(e){

        const {name,value} = e.target;

        setInput({...input,[name]:value});

    }

    function onSubmitHandler(e){

        e.preventDefault();

        const recData = {
            email:input.email,
            name:input.name,
            message:input.message
        }

        notifiaction.showContext({
            title:'sending',
            message:'sending message...',
            status:'pending'
        })
       

        axios.post('/api/contact',recData)
        .catch((error)=>{
           

            notifiaction.showContext({
            title:'not sending ',
            message:' message sending failed' || error,
            status:'error'
            })
      

        })

        notifiaction.showContext({
            title:'sending success',
            message:'sending message success',
            status:'success'
        })
       

    }


  return (
  <section className={classes.contact}>
  <h1>How Can I Help You</h1>
  <form
  onSubmit={onSubmitHandler}
   className={classes.form}>
      <div className={classes.controls}>
      <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input onChange={onChangeHandler}  name='email' placeholder='type your email' required id='email' type='email'/>
      </div>
      <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input onChange={onChangeHandler} name='name' placeholder='type your name' required id='name' type='text'/>
      </div>
      </div>
      <div className={classes.control}>
          <label htmlFor='msg'>Your Message</label>
          <textarea onChange={onChangeHandler} name='message' placeholder='type your message' required id='msg' rows='5'/>
      </div>
      <div className={classes.actions}>
          <button>Send Message</button>
      </div>
      
  </form>
  </section>
  )
}
