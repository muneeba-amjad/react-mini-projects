import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './Home'
import Counter from "./01-counter/Counter";
import Todo from "./02-todo/Todo"
import Meals from "./03-meals/Meals"
import Calculator from "./04-calculator/Calculator"
import ToggleBgColor from "./05-color-toggle/ToggleBgColor"


function App() {

  return (
    <BrowserRouter basename="/react-projects">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter/>}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="meals" element={<Meals/>}/>
        <Route path="calculator" element={<Calculator/>}/>
        <Route path="color-toggle" element={<ToggleBgColor/>}/>
      </Routes>

    </BrowserRouter>
   
  )
}

export default App
