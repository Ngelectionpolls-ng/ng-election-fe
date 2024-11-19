import ElectionResults from './ElectionResults'
import Hero from './Hero'
import NavBar from './NavBar'

function Header() {
    return ( 
        <header className='w-full relative'>
            <NavBar />
            <Hero />
            
        </header>
    )
}

export default Header
