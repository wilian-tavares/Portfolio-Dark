import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './assets/logo.png';

import { BiLogoHtml5, BiLogoJavascript, BiLogoCss3, BiLogoReact, BiLogoSass } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import { ThemeContext } from '../src/contexts/themeContext/theme';
import { useContext } from 'react';

import { useGithubAutomatedRepos, ProjectIcon, StackIcon } from 'github-automated-repos/index';
import Curriculo from './assets/curriculoWilianTavares.pdf';

function App() {

  const [repository, setRepository] = useState([])

  useEffect(() => {
    {/*Put here your github Name*/ }
    fetch('https://api.github.com/users/wilian-tavares/repos?sort=created&per_page=999')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'deploy'))); {/*<-- keyWord*/ }
  }, [])

  const { dataReposGithub } = useGithubAutomatedRepos();


  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [email, setEmail] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  function SendEmail() {
    console.log(nome)
  }



  const [isNavOpen, setIsNavOpen] = useState(false);


  const { theme, ToggleTheme } = useContext(ThemeContext);


  function toggleNav() {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen)

  }


const ButtonHamburger = styled.button`
  cursor: pointer;
  height: 40px;
  border:none;

  color: ${theme === 'dark' ? 'var(--White)' : 'var(--Black)'};
  background: none;
`

const MenuBurger = styled.button`
  height: 40px;
  width: 40px;
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
  align-items: center;
  background-color: ${theme === 'dark' ? 'var(--Black)' : 'var(--White)'};

  @media (max-width: 900px) {
    height: ${isNavOpen ? '500px' : '90px'}; // Altura condicional
    align-items: center;
    justify-content: space-around;
  }

  `
const Nav = styled.nav`
  margin: 0 60px;
  width: 100%; 
  {setIsNavOpen(false)} 

  @media(max-width: 900px){
  display: none;
  display: ${isNavOpen ? 'flex' : 'none'}; 

  justify-content: center;
  flex-direction: column;
}

`

const Ul = styled.ul`
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: space-between;
  

  @media (max-width: 900px) {
    display: ${isNavOpen ? 'flex' : 'none'}; // Ajuste aqui 
    flex-direction: column;
    background-color: ${theme === 'dark' ? 'var(--Black)' : 'var(--White)'}; 

    width: 100vw;
    justify-content: space-evenly;
  }
`
const UlHabilidades = styled.ul`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`

const Li = styled.li`
  color: blue;
  color: ${theme === 'dark' ? 'var(--White)' : 'var(--Black)'};      //arrumar aqui
  font-weight: bold;
  font-size: 24px;

`

const ButtonTheme = styled.button`
  width: 100px;
  height: 40px;
  font-weight: bold;

  background: var(--Black);
  background-color: ${theme === 'dark' ? 'var(--White)' : 'var(--Gray)'};

  color: ${theme === 'dark' ? 'var(--Black)' : 'var(--White)'};
  border-radius: 12px;
  cursor: pointer;
`

const A = styled.a`
  cursor: pointer;
  color: ${theme === 'dark' ? 'var(--White)' : 'var(--Gray)'};
`

const Section = styled.section`
  height: 80%;
  max-width: 1512px;
  display-flex;

  margin: 0 auto;
  color: ${theme === 'dark' ? 'var(--White)' : 'var(--Black)'};
`

const About = styled.div`
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;                
  height: 100vh;
  @media(max-width: 900px){  
  }
`;

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
  background-color: ${theme === 'dark' ? 'var(--Gray)' : 'var(--Creme)'};
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
  
  background-color: ${theme === 'dark' ? 'var(--Black)' : 'var(--White)'};
  color: ${theme === 'dark' ? 'var(--Creme)' : 'var(--Black)'};

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
  overflow-y: hidden;
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
  background-color: ${theme === 'dark' ? 'var(--Black)' : 'var(--White)'};
  color: ${theme === 'dark' ? 'var(--White)' : 'var(--Black)'};
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
            {isNavOpen ?

              <>
                <ButtonTheme aria-label="Alterar tema para escuro" onClick={() => ToggleTheme()}>Dark</ButtonTheme>


                <MenuBurger aria-label="Abrir menu de navegação">

                  <ButtonHamburger name='menu-Header' aria-label="Abrir menu de navegação"   >
                    <GiHamburgerMenu size='30' onClick={() => toggleNav()} alt='Button Menu Header' />
                  </ButtonHamburger>


                </MenuBurger>



              </>

              : ''}

          </Ul>
        </Nav>

        {!isNavOpen ?
          <>
            <ButtonTheme alt='Button-Theme' onClick={() => ToggleTheme()}>Dark</ButtonTheme>

            <MenuBurger alt='Menu-Header'>

              <ButtonHamburger alt='Button-Theme' name='menu-Header'>
                <GiHamburgerMenu size='30' onClick={() => toggleNav()} alt='Button Menu Header' />
              </ButtonHamburger>

            </MenuBurger>
          </>
          : ''
        }


      </Header>

      <Section>
        <About id='About'>
          <AboutTitle>
            <h1>Wilian Tavares</h1>
            <Strong >Desenvolvedor Front-end</Strong>
            <Img src={Logo} alt='Foto Logo do Site' />
            <AboutSocial>
              <A alt='Github' target='_blank' href='https://github.com/wilian-tavares'> <BsGithub size={30} alt='Github' /></A>
              <A alt='Linkedin' target='_blank' href='https://www.linkedin.com/in/wiliantavaresoliveira/' ><BsLinkedin size={30} color='blue' alt='Linkedin' /></A>


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

            <ButtonCta >
              <A style={{ color: 'black' }} href={Curriculo} download>Curriculo</A>
            </ButtonCta>

          </AboutDescription>
        </About>
      </Section>

      <Section>
        <Projetos id='Projetos'>
          <h2>Projetos</h2>
          <strong>Meus Principais Projetos</strong>

          <ShieldCards>
            {
              repository.map((item) => {
                return (

                  <CardProjetos key={item.id}>
                    <CardContent>

                      {/*Project Icon*/}
                      {item.topics.map((icon) => {
                        return (
                          <ProjectIcon key={icon} className="project_Icon" iconItem={icon} />
                        )
                      })}
                      {/*html Url*/}
                      <A target='_black' href={item.html_url} alt='Link do projeto no GitHub'>
                        {/*Name Project*/}
                        <h3>{item.name}</h3>
                      </A>
                      {/*Description*/}
                      <p>{item.description}</p>

                      {/*Homepage*/}
                      <A target='_blank' href={item.homepage} alt='Link do site'>
                        <h3>Homepage</h3>
                      </A>
                      {/*Stacks Icon*/}
                      {item.topics.map((icon) => {
                        return (
                          <strong><StackIcon key={icon} className="stack_Icon" iconItem={icon} /></strong>

                        )
                      })}

                    </CardContent>
                  </CardProjetos>


                )
              })
            }

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
            <UlHabilidades>
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

            </UlHabilidades>
          </ShieldHabilidades>
        </Habilidades>
      </Section>

      <Section>
        <Contato id='Contato'>
          <h2>Entre em Contato</h2>
          <ShieldContato>

            <Input type='text' placeholder='Primeiro Nome' name={nome} onChange={(e) => setNome(e.target.value)} />
            <Input type='text' placeholder='Segundo Nome' name={sobreNome} onChange={(e) => setSobreNome(e.target.value)} />

            <Input type='email' placeholder='Email' name={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type='tel' placeholder='Telefone' name={Telefone} onChange={(e) => setTelefone(e.target.value)} />

            <TextArea placeholder='Mensagem...' name={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            <ButtonEnviar onClick={SendEmail}>Enviar</ButtonEnviar>

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
