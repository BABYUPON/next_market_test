import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

const RootLayout = ({ childred }) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        {chilren}
        <Footer/>
      </body>
    </html>
  )
}

export default RootLayout