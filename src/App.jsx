import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import About from "./Pages/About"
import AllCourses from "./Pages/AllCourses"
import CourseDetails from "./Pages/CourseDetails"
import Home from "./Pages/Home"
import './index.css'
import Footer from "./Components/Footer"
import { ContextProvider } from "./context/ContextProvider"

function App() {


  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/courses" exact element={<AllCourses />} />
          <Route path="/course/:course" exact element={<CourseDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
