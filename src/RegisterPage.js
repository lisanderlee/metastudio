import { useForm } from 'react-hook-form';
import { app } from './firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6kJVyemjE50loFDpgd6nRYfSJxye9gAs",
    authDomain: "metastudioauth.firebaseapp.com",
    projectId: "metastudioauth",
    storageBucket: "metastudioauth.appspot.com",
    messagingSenderId: "787313638344",
    appId: "1:787313638344:web:9bc4442928cd451c5a9efd",
    measurementId: "G-4N19NFYCFK"
};

export const app = initializeApp(firebaseConfig);







export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = (data) => {
        const authentication = getAuth(app).createUserWithEmailAndPassword(data.email, data.password)
            .then((response) => {
              // insertar usuario en hasura
            })
            .catch((error) => {
              if (error.code === 'auth/email-already-in-use') {
                //toast.error('Email Already in Use');
              }
            })
    }
    
    console.log(errors);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="undefined" placeholder="Password" {...register} />
  
        <input type="submit" />
      </form>
    );
  }