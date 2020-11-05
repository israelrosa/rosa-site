import React from 'react';

import Img from 'gatsby-image';

import { AboutDivisionSymbols, AboutLeftDivision, AboutRightDivision, AboutSymbols, Container } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';

const about: React.FC = () => {
  const query = useStaticQuery(graphql`
  query {
    design: file(relativePath: { eq: "design.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    code: file(relativePath: { eq: "code.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    music: file(relativePath: { eq: "music.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoBackground: file(relativePath: { eq: "logo-background.png" }) {
      childImageSharp {
        fluid {
          presentationWidth,
          presentationHeight,
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  const {logoBackground, design, code, music} = query;
  return (
    <Layout>
      <SEO/>
      <Nav pageIndex={2}/>
      <Container>
        <AboutLeftDivision>
          <div>
            <h1>Minha Jornada</h1>
            <p>
              Meu Nome é <strong>Israel Pires Rosa</strong>, sou músico, designer e
              programador. Minha história com o design e minha vida profissional começam
              numa pequena gráfica, onde fui procurar
              alguma oportunidade de emprego. Foi um grande desafio, mas eu sempre
              tive facilidade para aprender. Sem ter nenhuma experiência com os
              programas de edição, eu teria que aprender em menos de uma semana e
              fazer uma logo para passar no teste, consegui criar a logo que hoje é a atual da empresa e posteriormente ser
              contratado para ser o responsável na área de design. Após alguns meses
              trabalhando e ao mesmo tempo aprendendo a usar as ferramentas
              e os conceitos de design, decidi abrir meu próprio negócio e enfrentar um
              novo desafio.
            </p>
            <p>
            Hoje estudo programação, mais especificamente a stack Nodejs, Reactjs, e React Native, com o objetivo de fundar minha startup.
            </p>
          </div>
        </AboutLeftDivision>
        <AboutRightDivision>
          <ul>
            <li>
              <AboutDivisionSymbols>
                <AboutSymbols>
                  <Img fluid= {design.childImageSharp.fluid} style={{display: "flex", minWidth: "36px", maxWidth: "36px"}}/>
                </AboutSymbols>
                <div>
                  <div>
                    <h2>Designer</h2>
                    <p>
                      Designer há 2 anos, com bastante experiência e credibilidade.
                    </p>
                  </div>
                </div>
              </AboutDivisionSymbols>
            </li>
            <li>
              <AboutDivisionSymbols>
                <AboutSymbols>
                  <Img fluid= {code.childImageSharp.fluid} style={{display: "flex", minWidth: "42px", maxWidth: "42px"}}/>
                </AboutSymbols>
                <div>
                  <div>
                    <h2>Programador</h2>
                    <p>
                      Programador full stack, preparado para qualquer desafio.
                    </p>
                  </div>

                </div>
              </AboutDivisionSymbols>
            </li>
            <li>
              <AboutDivisionSymbols>
                <AboutSymbols>
                  <Img fluid= {music.childImageSharp.fluid} style={{display: "flex", minWidth: "16px", maxWidth: "16px"}}/>
                </AboutSymbols>
                <div>
                  <div>
                    <h2>Músico</h2>
                    <p>
                      Músico e produtor de trilhas sonoras por hobby.
                    </p>
                  </div>
                </div>
              </AboutDivisionSymbols>
            </li>
          </ul>
          <div><Img fluid={logoBackground.childImageSharp.fluid} style={{display: "flex", minWidth: "700px"}}/></div>
        </AboutRightDivision>

      </Container>
    </Layout>
  )
}

export default about;
