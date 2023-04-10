import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from "react-router-dom"


function Layout({ children }) {
  return (
    <>
   
      <Header/>
      <main>{children}</main>   <Outlet />
      <Footer />
    </>
  )
}
export default Layout