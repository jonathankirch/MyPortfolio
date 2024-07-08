import { NewProject } from './NewProject/NewProject'

// Icones das tecnologias dos projetos
import { FaCss3, FaReact, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'
import { TbBrandNextjs } from "react-icons/tb";

// Imagens
import PortfolioIMG from './ProjectImages/PortfolioIMG.png'
import BookPassIMG from './ProjectImages/BookPassIMG.png'
import CloneNetflixIMG from './ProjectImages/CloneNetflixIMG.png'
import ValorantAppIMG from './ProjectImages/ValorantSite.png'
import SnackHouseIMG from './ProjectImages/Snack-House.png'

export const Projects = () => {
  const tecnologias = {
    Portfolio: [
      <FaReact
        title="React"
        key={'react'}
        size={40}
        color="rgb(94, 211, 244)"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
      <FaBootstrap
        title="Bootstrap"
        key={'bootstrap'}
        size={40}
        color="rgb(135, 18, 247)"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
    ],
    SnackHouse: [
      <TbBrandNextjs
        title="Next Js"
        key={'nextjs'}
        size={40}
        color="white"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
      <BiLogoTypescript
        title="TypeScript"
        key={'typecript'}
        size={40}
        color="#2f74c0"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
      <SiTailwindcss
        title="Tailwind"
        key={'tailwind'}
        size={40}
        color="rgb(54, 183, 240)"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />
    ],
    BookPass: [
      <FaReact
        title="React"
        key={'react'}
        size={40}
        color="rgb(94, 211, 244)"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
      <FaBootstrap
        title="Bootstrap"
        key={'bootstrap'}
        size={40}
        color="rgb(135, 18, 247)"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
        S
      />,
    ],
    CloneNetflix: [
      <FaReact
        title="React"
        key={'react'}
        size={40}
        color="rgb(94, 211, 244)"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
      <FaCss3
        title="CSS3"
        key={'css3'}
        size={40}
        color="blue"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
    ],
    ValorantApp: [
      <TbBrandNextjs  
        title="NextJs"
        key={'NextJs'}
        size={40}
        color='white'
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
      <SiTailwindcss
        title="Tailwind"
        key={'tailwind'}
        size={40}
        color="rgb(54, 183, 240)"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
      <BiLogoTypescript
        title="TypeScript"
        key={'TypeScript'}
        size={40}
        color="#2f74c0"
        className="rounded shadow-sm bg-dark-transparent mx-2 p-1"
      />,
    ],
  }

  return (
    <section className="container mt-5 pb-5 mb-5" id="projetos">
      <div className="pb-5">
        <h1 className="text-center text-purple fw-bold mb-4">Meus Projetos:</h1>
      </div>
      <div>
        <NewProject
          nome={'Snack House'}
          descricaoP1={
            'Este projeto foi feito pra a lancheria Snack House em Teutônia, onde os clientes podem fazer seus pedidos e enviam ao whats automaticamente para que possam ser preparados (O projeto esta sendo utilizado atualmente pela lancheria).'
          }
          descricaoP2={
            'Projeto foi criado utiliando Next Js, TypeScript e Tailwind. Site é totalmente responsivo, para disponibiliza-lo para o maior número de pessoas.'
          }
          img={SnackHouseIMG}
          tecnologias={tecnologias.SnackHouse}
          linkPreview={'https://snackhouse.app.br/'}
          linkRepo={'https://github.com/jonathankirch/SnackHouse2.0'}
        />
        <NewProject
          nome={'Portfólio'}
          descricaoP1={
            'Meu portfólio foi elaborado com o intuito de demonstrar, aos interessados, o meu trabalho. Por meio dele, podem ver tanto o meu histórico de criações quanto o meu conhecimento já adiquirido.'
          }
          isReverse
          descricaoP2={
            'Também disponibilizo formas de entrar em contato para facilitar a interação com os clientes.'
          }
          img={PortfolioIMG}
          tecnologias={tecnologias.Portfolio}
          linkPreview={'https://jonathankirch.vercel.app'}
          linkRepo={'https://github.com/jonathankirch/MyPortfolio'}
        />
				<NewProject
          nome={'Valorant'}
          descricaoP1={
            'Este site utiliza uma API externa que fornece informações do jogo de FPS Valorant. Neste projeto, manipulo os dados para exibi-los na tela, mostrando diversas informações sobre os mapas, armas, itens e acessórios de jogador.'
          }
          descricaoP2={
            'O projeto foi criado utilizando Next JS, o que permite um melhor sistema de SEO que melhora os sistemas de busca do site, além de utilizar Tailwind e TypeScript, e ser totalmente responsivo tanto para PC quanto para dispositivos móveis.'
          }
          img={ValorantAppIMG}
          tecnologias={tecnologias.ValorantApp}
          linkPreview={'https://valorant-itens.vercel.app/'}
          linkRepo={'https://github.com/jonathankirch/Valorant-Itens-NextJs'}
        />
        <NewProject
          nome={'BookPass'}
          descricaoP1={
            'O site utiliza a API do Google Books em sua versão gratuita. Nele, você pode receber recomendações de acordo com suas preferências, explorar os mais populares e pesquisar por títulos, além de adicionar os livros de sua escolha à sua lista de favoritos.'
          }
          isReverse
          descricaoP2={
            'Também é possível obter informações detalhadas sobre eles, incluindo seus valores, e até mesmo comprá-los.'
          }
          img={BookPassIMG}
          tecnologias={tecnologias.BookPass}
          linkPreview={'https://bookpass.vercel.app'}
          linkRepo={'https://github.com/jonathankirch/BookPass'}
        />
        <NewProject
          nome={'Netflix-Clone'}
          descricaoP1={
            'O clone da Netflix foi o meu primeiro projeto utilizando React. Nele, pude colocar em prática e testar os meus conhecimentos com esta biblioteca ( É reproduzido apenas a parte visual e inicial do original ).'
          }
          descricaoP2={
            'O site é totalmente responsivo, e para estilizar o projeto, utilizei CSS3.'
          }
          img={CloneNetflixIMG}
          tecnologias={tecnologias.CloneNetflix}
          linkPreview={'https://meu-clone-netflix.vercel.app'}
          linkRepo={'https://github.com/jonathankirch/NetflixClone'}
        />
      </div>
    </section>
  )
}
