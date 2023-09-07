import Image from 'next/image'
import './home.style.css'
// import bg from './img/bg.svg'
import logoSoli from './img/logo-soli.png'
import illustrationVector from './img/ilus2.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-fluid home">
      <div className="container home">
        <Image className='logo-soli' src={logoSoli} alt="logo" />
        <div className="row">
          <div className="col">
          <div className="copywriting-hero">
            <h1>Empowering Your Digital Vision with Solitaire.</h1>
            <p>Welcome to Solitaire, where innovation meets code. Were here to empower your digital dreams with tailored software solutions. Our passion is to transform ideas into reality. Let's code your vision together!</p>
            <Link href='/register'>
            <button type="button" className="btn btn-success">Becomes as user</button>
            </Link>
          </div>
          </div>
          <div className="col">
            <Image className="ilusimg" src={illustrationVector} alt="ilus" />
          </div>
        </div>
      </div>
    </div>
  )
}
