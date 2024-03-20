import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <div className='h-16'>
        <Nav />
      </div>
      <div className='min-h-[calc(100vh-117px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
