import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./index.css"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
      <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AJ Smith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

