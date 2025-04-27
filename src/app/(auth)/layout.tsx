import { Navbar } from "@/components/navbar"

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
