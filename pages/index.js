import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My WebSite </title>
        <link rel="icon" href="/favi" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hello Welcome to Portafolio <a href="https://www.instagram.com/"> :)</a>
        </h1>

        <p className={styles.description}>
          Quiero contarles quien soy , pero como hago eso ? <code></code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/jean-villarroel-b57590219/" className={styles.card}>
            <h3>linkedin &rarr;</h3>
            <p>En mi linkedin muestro mi intencion de conectar con personas que me sumen y poder sumarles</p>
          </a>

          <a href="https://github.com/JeanCarlos18" className={styles.card}>
            <h3>GIT&rarr;</h3>
            <p>En git podran ver lo que puedo hacer de manera practica , podran explorar mis distintos proyectos y habilidades</p>
          </a>

          <a
            href="https://www.instagram.com/jeanki0318/"
            className={styles.card}
          >
            <h3> Fotografia &rarr;</h3>
            <p>Siempre que salgo en bicicleta me gusta capturar recuerdo o momentos en foto siento que habla de mi y lo comparto en mi Instagram donde muestro eso momentos</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Proyectos&rarr;</h3>
            <p>
              Esta seccion sera para publicar los trabajos Freelance que tenga
            </p>
          </a>
        </div>
        <h1 className={styles.title}>Contactame
        </h1>

        <form className={styles.contacto}>

          <div>
            <label>Nombre:</label>
            <input
              type="text"
              id="name"
              onChange={handleSubmit}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              onChange={handleSubmit}
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <input className='texto-message' type='text' onChange={handleSubmit}>

            </input>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
