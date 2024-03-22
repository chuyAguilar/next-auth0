import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <a href='/api/auth/login'>
        <h2>Login</h2>
      </a>

      <a href='./Profile'>
        <h2>Profile</h2>
      </a>
    </div>
  )
}


/*<a href='/api/auth/logout'>
        <h2>logout</h2>
      </a>
      */