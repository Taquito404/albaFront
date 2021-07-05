import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home() {
  const [isValidated, setIsValidated] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const redirectByRole = async () => {
      const token = window.localStorage.getItem('token');
      const today = new Date();
      const decodedToken = jwt.decode(token, { complete: true });
      if (!token) {
        return;
      }

      if (decodedToken.payload.exp * 1000 < today.getTime()) {
        window.localStorage.removeItem('token');
        return;
      }
      let options = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          auth: token,
        }
      }
      const { data } = await axios.get('https://dev-alba.herokuapp.com/users/profile', options);
      data.user.role.map(userRole => {
        console.log(userRole)
        if (userRole === 'admin') {
          router.push('/admin');
          setIsValidated(true);
          return;
        } else if (userRole === 'partner') {
          //ruta de los partners
          //setIsValidated(true);
          return;
        }
      });
      setIsValidated(true);
    }
    redirectByRole();
    return () => {
      setIsValidated(false);
    }
  }, [])


  return (
    <>
      {
        isValidated === false ?
          <div className="container container-fluid d-flex align-items-center justify-content-center"><h1>Loading...</h1></div>
          :
          <div className={styles.container}>
            <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
              <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
              </h1>

              <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code>
              </p>

              <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h2>Documentation &rarr;</h2>
                  <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                  <h2>Learn &rarr;</h2>
                  <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                  href="https://github.com/vercel/next.js/tree/master/examples"
                  className={styles.card}
                >
                  <h2>Examples &rarr;</h2>
                  <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={styles.card}
                >
                  <h2>Deploy &rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
                </a>
              </div>
            </main>

            <footer className={styles.footer}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              </a>
            </footer>
          </div>
      }
    </>
  )
}
