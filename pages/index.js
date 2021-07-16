import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import React from 'react';

function ProfileSidebar(propriedades) {
  return(
    <Box >
        <img src= {`http://github.com/${propriedades.githubUser}.png`} style= {{ borderRadius: '8px' }}/>
        <hr/>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
        <hr/>

        <AlurakutProfileSidebarMenuDefault/>
    </Box>

  )
}


export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '2313129312',
    title: 'Eu odeio acordar cedo',
    image: 'http://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const usuarioGithub = 'alex22stein';
  //const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'omariosouto',
    'peas',
    'juunegreiros',
    'marcobrunodev'
  
  ]
  
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>

        <div className="profileArea" style= {{ gridArea: 'profileArea'}}>

        <ProfileSidebar githubUser= {usuarioGithub}/>

        </div>

        <div className="welcomeArea" style= {{ gridArea: 'welcomeArea'}}>

        <Box >
          <h1 className='title'>
            Bem vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subTitle">No que está pensando?</h2>
          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault()
            const dadosDoForm = new FormData(e.target);

            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image')
            }

            //comunidades.push('Alura Stars');
            const comunidadesAtualizadas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizadas)

          }}>
            <div>
              <input 
                  placeholder="Como você está se sentindo?"
                  name="title"
                  aria-label="Como você está se sentindo?"
                  type="text"
                  />
            </div>
            <div>
              <input 
                    placeholder="O que está com vontade de fazer?"
                    name="image"
                    aria-label="O que está com vontade de fazer?"
                    type="text"
                    />
            </div>

            <button>
              Publicar
            </button>

          </form>


        </Box>

        </div>

        <div className="profileRelationsAre" style= {{ gridArea: 'profileRelationsArea'}}>

        <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>
            Meus pensamentos ({comunidades.length})
          </h2>
          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>

                  <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>

                </li>
              )
            })}

          </ul>
        </ProfileRelationsBoxWrapper>


        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
          Pessoal da Comunidade ({pessoasFavoritas.length})
          
          </h2>

          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li key={itemAtual}>

                  <a href={`/users/${itemAtual}`}>
                    <img src={`http://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>

                </li>
              )
            })}

          </ul>
        </ProfileRelationsBoxWrapper>

        </div>
        


      </MainGrid>

    </>




  )
}
