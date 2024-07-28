import ScrollToTop from "./components/Element/ScrollToTop"
import Footer from "./components/Layouts/Footer"
import Header from "./components/Layouts/Header"
import AllRoutes from "./routes/AllRoutes"
import { FilterProvider } from "./context/FilterContext"
import toast, { Toaster } from 'react-hot-toast';

function App() {


  return (

<div className="w-[100%] mx-auto dark:bg-slate-800">
  <Toaster/>
<Header/>

<ScrollToTop/>
<AllRoutes/>
<Footer/>
</div>
    
  )
}

export default App
