import { Routes, Route } from 'react-router-dom'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import Home from './views/Home/Home'
import Movies from './views/Movies/Movies'
import Series from './views/Series/Series'
import NotFound from './views/404'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
)

export default App
