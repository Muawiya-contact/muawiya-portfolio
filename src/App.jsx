import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import LeetCode from './components/LeetCode'
import Books from './components/Books'
import Goals from './components/Goals'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <LeetCode />
        <Books />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
