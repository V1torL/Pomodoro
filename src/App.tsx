import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action=''>
                    <div className='formRow'>
                        <label htmlFor="meuInput"> Task </label>
                        <input type="text" id='meuInput' />
                    </div>
                </form>
                    <div className='formRow'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro inventore ex fugit magnam vero! Dolor accusantium ut laudantium aperiam, voluptas ratione nemo reiciendis assumenda magnam dolores amet dolore eligendi.
                    </div>
                    <div className='formRow'>
                        <p>Ciclos</p>
                        <p>0 0 0 0</p>
                    </div>
                    <div className='formRow'>
                        <button>Enviar</button>
                    </div>
            </Container>
        </>
    )
}