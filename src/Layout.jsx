import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Outlet ></Outlet>
      <Footer />
    </>

  )
}

export default App