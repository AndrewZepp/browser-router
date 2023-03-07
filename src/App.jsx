import { Routes, Route}  from 'react-router-dom'

import { NavBar } from "./NavBar"
import { Inicio } from './Inicio'
import { Acercade } from './Acercade'
import { IniciarSesion } from './IniciarSesion'

export const App = () => {
    return(
        <>
            <NavBar/>
            <hr />
            <Routes>

                <Route path='/' element= { <Inicio />}/>
                <Route path='/acercade' element={<Acercade />}/>
                <Route path='/iniciar-sesion' element={<IniciarSesion />}/>

            </Routes>
        </>
    )
}