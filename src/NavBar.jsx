import { Link }  from 'react-router-dom'

export const NavBar = () => {
    return(
        <>
            <Link to='/' >Inicio    </Link>
            <Link to='/acercade' >Acerda de... </Link>
            <Link to='/iniciar-sesion'>Iniciar Sesion</Link>
                
        </>
    )
}