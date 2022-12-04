import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Form from "./components/Form"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/signup'
            element={<Form title='Sign Up Form' buttonTitle='Signup' id={2} />}
          />
          <Route
            path='/login'
            element={<Form title='Log In Form' buttonTitle='Login' id={1} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
