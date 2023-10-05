import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import Logo from './assets/logo.png';

import { BiLogoHtml5, BiLogoJavascript, BiLogoCss3, BiLogoReact, BiLogoSass } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import {ThemeContext} from '../src/contexts/themeContext/theme';
import { useContext } from 'react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [theme, setTheme] = useState('light');

  const {theme, ToggleTheme} = useContext(ThemeContext);


  function toggleNav() {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen)
  }






  const ButtonHamburger = styled.button`
  cursor: pointer;
  height: 40px;
  border:none;
 
  
`

  const MenuBurger = styled.button`
  height: 40px;
  width: 40px;
  color: var(--Black);

  border: none;
  display: none;
  flex-direction: column;

  border: 1px solid red;

 

  @media(max-width: 900px) {
    display: contents;
    border: 1px solid red;

  }
`




const Header = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between; 

  align-items: center; /* Adicione esta linha para alinhar verticalmente */
  
  background-color: ${ theme === 'dark' ? 'var(--Black)' : 'var(--White)'};


    @media(max-width: 900px){   
       align-items: center;
       justify-content: space-around;
      
    }

  `
  const Nav = styled.nav`
  disply: flex;
  margin: 0 60px;

  width: 100%;

  @media(max-width: 900px){
    display: none;
  }
`

  const Ul = styled.ul`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;

  // @media(max-width: 900px){
  //   color: red;
  //   flex-direction: column;

  // }
`

  const Li = styled.li`
  color: blue;
  color: ${ theme === 'dark' ? 'var(--White)' : 'var(--Black)'};      //arrumar aqui

  font-weight: bold;
  font-size: 24px;
`




  const ButtonTheme = styled.button`
  width: 100px;
  height: 40px;
  font-weight: bold;

  background: var(--Black);
  background-color: ${ theme === 'dark' ? 'var(--White)' : 'var(--Gray)'};

  color: ${ theme === 'dark' ? 'var(--Black)' : 'var(--White)'};

  border-radius: 12px;

  cursor: pointer;
`

  const A = styled.a`
  cursor: pointer;
  color: ${ theme === 'dark' ? 'var(--White)' : 'var(--Gray)'};

`

  const Section = styled.section`
  height: 80%;
  max-width: 1512px;
  display-flex;

  margin: 0 auto;

  color: ${ theme === 'dark' ? 'var(--White)' : 'var(--Black)'};
`

  const About = styled.div`
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;                
  height: 100vh;

`

  const AboutTitle = styled.div`
  width: 80%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AboutSocial = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-around;

width: 80%;
max-width: 350px;

`


  const Img = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`

  const AboutDescription = styled.div`
  width: 80%;
  max-width: 650px;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

  const ButtonCta = styled.button`
  width: 100px;
  height: 40px;
  font-weight: bold;
  background: var(--Cta);
  color: var(--Black);
  border-radius: 12px;
  cursor: pointer;
  margin-top: 30px;
`

  const ContainerMain = styled.div`
  background: var(--Creme);
  background-color: ${ theme === 'dark' ? 'var(--Gray)' : 'var(--Creme)'};

`

  //PROJETOS

  const Projetos = styled.div`
  display: flex;

  height: 60vh;

  flex-direction:column;
  align-items:center;
  justify-content: center;

`

  const ShieldCards = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 50px;

  width: 90%;

  overflow-x: auto;
  

`

  const CardProjetos = styled.div`
  flex-shrink: 0;
  width: 90%;
  max-width: 500px;

  height: 300px;
  border-radius: 12px;
  padding: 20px;
  
  background-color: ${ theme === 'dark' ? 'var(--Black)' : 'var(--White)'};
  color: ${ theme === 'dark' ? 'var(--White)' : 'var(--Creme)'};

  margin-right: 20px;
  white-space: normal;
  overflow-y: auto; /* Adicione overflow-y aqui para rolagem vertical */
`;

  const CardContent = styled.div`
  max-width: 100%;
  overflow-y: auto;
`


  /* HABILIDADES */
  const Habilidades = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

  const ShieldHabilidades = styled.div`
  margin-top: 100px;
  width: 80%;
  max-width: 950px;
  height: 120px;
  overflow-x: auto;
`

  const Contato = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

  const ShieldContato = styled.div`
  margin-top: 50px;
  width: 80%;
  max-width: 650px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`
  const Input = styled.input`
  padding: 20px;
  width: 80%;
  max-width: 300px;
  height: 45px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
`


  const TextArea = styled.textarea`
  width: 100%;
  max-width: 630px;
  height: 150px;

  border-radius: 12px;
  padding: 20px;
  
  font-weight: bold;
  font-size: 16px;

`

  const ButtonEnviar = styled.button`
  width: 100px;
  height: 40px;
  font-weight: bold;
  background: var(--Cta);
  color: var(--Black);
  border-radius: 12px;
  cursor: pointer;
  margin-top: 30px;
`
  const Footer = styled.footer`
  height: 200px;
  background-color: ${ theme === 'dark' ? 'var(--Black)' : 'var(--White)'};
  color: ${ theme === 'dark' ? 'var(--White)' : 'var(--Black)'};
  display: flex;
  justify-content: center;
  align-items: center;
`

  const FooterContent = styled.div`
  width: 265px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
  const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
`
  const Strong = styled.strong`
  margin: 20px 0; 
`

  return (
    <ContainerMain >
      <Header>
        <Nav>
          <Ul>
            <Li>
              <A href='#About'>Sobre</A>
            </Li>
            <Li>
              <A href='#Projetos'>Projetos</A>
            </Li>
            <Li>
              <A href='#Habilidades'>Habilidades</A>
            </Li>
            <Li>
              <A href='#Contato'>Contato</A>
            </Li>
          </Ul>
        </Nav>
        <ButtonTheme onClick={() => ToggleTheme()}>Dark</ButtonTheme>

        
        <MenuBurger>

          <ButtonHamburger >
            <GiHamburgerMenu size='30' onClick={() => toggleNav()} />
          </ButtonHamburger>

  
        </MenuBurger>


      </Header>

      <Section>
        <About id='About'>
          <AboutTitle>
            <h1>Wilian Tavares</h1>
            <Strong >Desenvolvedor Front-end</Strong>
            <Img src={Logo} alt='Foto Logo do Site' />
            <AboutSocial>
              <A> <BsGithub size={30}/></A>
             <A><BsLinkedin size={30} color='blue'/></A>
              
              
            </AboutSocial>
          </AboutTitle>
          <AboutDescription>
            <p>
              Em 2019, comecei a estudar Sistemas de Informação na Universidade
              e desde então tenho me dedicado a adquirir habilidades para ser um
              desenvolvedor Front-end.
              Minhas competências incluem HTML, CSS, JavaScript, TypeScript e ReactJS,
              com treinamento em um Bootcamp FullStack da Startse e cursos em
              andamento, incluindo UI-UX. Além disso, minha experiência no comércio aprimorou minhas habilidades de comunicação.
              Estou pronto para contribuir como um desenvolvedor Front-end altamente qualificado.
            </p>

            <ButtonCta>Curriculo</ButtonCta>

          </AboutDescription>
        </About>
      </Section>

      <Section>
        <Projetos id='Projetos'>
          <h2>Projetos</h2>
          <strong>Meus Principais Projetos</strong>

          <ShieldCards>
            <CardProjetos>
              <CardContent>
                <h3>PomoPrize</h3>
                <p>
                  Wil Filmes é um site voltado sobre filmes,
                  nele é listado os filmes mais populares,
                  filmes no cinema e as próximas estreias.
                  Podendo também adicionar seu filme favorito no Local Storage do navegador!
                </p>
                <strong>REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST</strong>
              </CardContent>
            </CardProjetos>

            <CardProjetos>
              <CardContent>
                <h3>PomoPrize</h3>
                <p>
                  Wil Filmes é um site voltado sobre filmes,
                  nele é listado os filmes mais populares,
                  filmes no cinema e as próximas estreias.
                  Podendo também adicionar seu filme favorito no Local Storage do navegador!
                </p>
                <strong>REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST</strong>
              </CardContent>
            </CardProjetos>

            <CardProjetos>
              <CardContent>
                <h3>PomoPrize</h3>
                <p>
                  Wil Filmes é um site voltado sobre filmes,
                  nele é listado os filmes mais populares,
                  filmes no cinema e as próximas estreias.
                  Podendo também adicionar seu filme favorito no Local Storage do navegador!
                </p>
                <strong>REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST</strong>
              </CardContent>
            </CardProjetos>

            <CardProjetos>
              <CardContent>
                <h3>PomoPrize</h3>
                <p>
                  Wil Filmes é um site voltado sobre filmes,
                  nele é listado os filmes mais populares,
                  filmes no cinema e as próximas estreias.
                  Podendo também adicionar seu filme favorito no Local Storage do navegador!
                </p>
                <strong>REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST</strong>
              </CardContent>
            </CardProjetos>

            <CardProjetos>
              <CardContent>
                <h3>PomoPrize</h3>
                <p>
                  Wil Filmes é um site voltado sobre filmes,
                  nele é listado os filmes mais populares,
                  filmes no cinema e as próximas estreias.
                  Podendo também adicionar seu filme favorito no Local Storage do navegador!
                </p>
                <strong>REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST</strong>
              </CardContent>
            </CardProjetos>

            <CardProjetos>
              <CardContent>
                <h3>PomoPrize</h3>
                <p>
                  Wil Filmes é um site voltado sobre filmes,
                  nele é listado os filmes mais populares,
                  filmes no cinema e as próximas estreias.
                  Podendo também adicionar seu filme favorito no Local Storage do navegador!
                </p>
                <strong>REACT-JS, JAVASCRIPT, RESPONSIVE DESIGN, API-REST</strong>
              </CardContent>
            </CardProjetos>


          </ShieldCards>



        </Projetos>
      </Section>

      <Section>
        <Habilidades id='Habilidades'>
          <h2>Habilidades</h2>
          <ShieldHabilidades>
            <Ul>
              <Li>
                <BiLogoHtml5 color='red' size='96' />
              </Li>

              <Li>
                <BiLogoCss3 color='blue' size='96' />
              </Li>
              <Li>
                <BiLogoSass color='pink' size='96' />
              </Li>
              <Li>
                <BiLogoJavascript color='#dad60b' size='96' />
              </Li>
              <Li>
                <BiLogoReact color='blue' size='96' />
              </Li>

              <Li>
                <BiLogoCss3 color='blue' size='96' />
              </Li>
              <Li>
                <BiLogoSass color='pink' size='96' />
              </Li>
              <Li>
                <BiLogoJavascript color='#dad60b' size='96' />
              </Li>
              <Li>
                <BiLogoReact color='blue' size='96' />
              </Li>

              <Li>
                <BiLogoCss3 color='blue' size='96' />
              </Li>
              <Li>
                <BiLogoSass color='pink' size='96' />
              </Li>
              <Li>
                <BiLogoJavascript color='#dad60b' size='96' />
              </Li>
              <Li>
                <BiLogoReact color='blue' size='96' />
              </Li>

            </Ul>
          </ShieldHabilidades>
        </Habilidades>
      </Section>

      <Section>
        <Contato id='Contato'>
          <h2>Entre em Contato</h2>
          <ShieldContato>

            <Input type='text' placeholder='Primeiro Nome' />
            <Input type='text' placeholder='Segundo Nome' />

            <Input type='email' placeholder='Email' />
            <Input type='tel' placeholder='Telefone' />

            <TextArea placeholder='Mensagem...' />
            <ButtonEnviar>Enviar</ButtonEnviar>

          </ShieldContato>
        </Contato>
      </Section>

      <Footer>
        <FooterContent>
          <FooterSocialMedia>

            <A alt='Github' target='_blank' href='https://github.com/wilian-tavares'><BsGithub size='40' /></A>
            <A alt='Linkedin' target='_blank' href='https://www.linkedin.com/in/wiliantavaresoliveira/'><BsLinkedin size='40' /></A>



          </FooterSocialMedia>
          <h3>Copyright 2023, Wilian Tavares.</h3>

        </FooterContent>


      </Footer>



    </ContainerMain>
  );
}

export default App;
