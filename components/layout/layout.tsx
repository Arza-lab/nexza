// import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }:any) {
  return (
    <>
      {/* <Navbar /> */}
      <main className='class="text-center text-gray-700 dark:text-gray-200 dark:bg-gray-900"'>
        {children}
      </main>
      <Footer />
    </>
  )
}