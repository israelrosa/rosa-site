import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Img from 'gatsby-image';
import { Container, ImageMan, WhiteBlockEffect, WhiteDivision, BlackDivision, Stack, About, AboutSymbols, AboutRightDivision, AboutLeftDivision, AboutDivisionSymbols } from './styles';
import Nav from '../components/Nav';

const Index: React.FC = () => {

  const [index, setIndex] = useState(1);

  const {man, nextjs, gatsby, react, node, logoBackground, design, code, music} = useStaticQuery(graphql`
    query {
      man: file(relativePath: { eq: "man.png" }) {
        childImageSharp {
          fluid(maxHeight: 650) {
            presentationWidth,
            presentationHeight,
            ...GatsbyImageSharpFluid
          }
        }
      }
      nextjs: file(relativePath: { eq: "nextjs.png" }) {
        childImageSharp {
          fixed(width:50, height:50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gatsby: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fixed(width:50, height:50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fixed(width:50, height:50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      node: file(relativePath: { eq: "node.png" }) {
        childImageSharp {
          fixed(width:50, height:50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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

  return (
    <Layout>
      <Container>
        <Nav index={index} setIndex={setIndex}/>
        {index === 1 &&
          <>
            <ImageMan>
              <WhiteBlockEffect/>
              <Img fluid = {man.childImageSharp.fluid} style={{display: "flex", width: man.childImageSharp.fluid.presentationWidth, height: man.childImageSharp.fluid.presentationHeight }} />
            </ImageMan>
            <WhiteDivision>
              <div>
                <h1>Designer</h1>
                <h1>Designer</h1>
                <h1>Designer</h1>
                <h1>Designer</h1>
                <Button color="var(--primary-color)">
                  Ver Trabalhos
                </Button>
              </div>
            </WhiteDivision>
            <BlackDivision>
              <Stack>
                <li>
                  <Img fixed= {nextjs.childImageSharp.fixed}/>
                </li>
                <li>
                  <Img fixed= {gatsby.childImageSharp.fixed}/>
                </li>
                <li>
                  <Img fixed= {react.childImageSharp.fixed}/>
                </li>
                <li>
                  <Img fixed= {node.childImageSharp.fixed}/>
                </li>
              </Stack>
              <div>
                <h1>Programador</h1>
                <span>FULL STACK</span>
                <Button color= "var(--secundary-color)">
                  Ver Trabalhos
                </Button>
              </div>
            </BlackDivision>
          </>
        }
        {index === 2 &&
          <>
            <About>
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
                <div><Img fluid={logoBackground.childImageSharp.fluid} style={{display: "flex", minWidth: "650px"}}/></div>
              </AboutRightDivision>
            </About>
          </>
        }
      </Container>
    </Layout>
  )
}

export default Index;
