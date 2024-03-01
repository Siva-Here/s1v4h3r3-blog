import { FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
      <main className='About'>
          <h2>About</h2>
          <p style={{ marginTop: "1rem" }}>This Blog app is designed by s1v4h3r3 using React<br />
            I wil post my cool Writeups for <strong>CTF <sup>'</sup>s</strong>...
          </p><br />
          <a href="www.linkedin.com/in/siva-guttula-561995258" target="_blank"><FaLinkedin size={35}/></a>
      </main>
  )
}

export default About