import Hero from './Hero'
import NavBar from './NavBar'

function Header() {
    return (
        <header className='w-full'>
            <NavBar />
            <Hero />
        </header>
    )
}

export default Header
