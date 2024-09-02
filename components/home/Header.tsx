import Hero from './Hero'
import NavBar from './NavBar'

function Header() {
    return (
        <header className='py-8 w-full'>
            <NavBar />
            <Hero />
        </header>
    )
}

export default Header
