import { NavBar } from "./Components/NavBar"
import { ItemListContainer } from "./Components/ItemListContainer"
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida="Bienvenidos a Paw Paw" presentacion="Aqui podras encontrar los juguetes y la comida favorita de tus mejores amigos" />

    </>
  )
}

export default App
