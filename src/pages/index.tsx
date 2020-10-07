import { graphql, useStaticQuery } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Img from 'gatsby-image';
import { Container, ImageMan, WhiteBlockEffect, WhiteDivision, BlackDivision, Stack, About, AboutSymbols, AboutRightDivision, AboutLeftDivision, AboutDivisionSymbols, Services, ServicesContent, Portfolio, PortfolioImg, PortfolioOptions } from './styles';
import Nav from '../components/Nav';
import ServicesNav from '../components/ServicesNav';
import webDesign from '../gifs/web-design.gif';
import graphicDesign from '../gifs/graphic-design.gif';
import programmer from '../gifs/programmer.gif';
import socialMedia from '../gifs/social-media.gif';

interface PortfolioData {
    title: string;
    description: string;
    thumbnail: any;
}

interface Portfolio {
  frontmatter: PortfolioData;

}

const Index: React.FC = () => {
  const [index, setIndex] = useState(1);
  const [serviceIndex, setServiceIndex] = useState(1);
  const [portfolioData, setPortfolioData] = useState({} as Portfolio);

  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
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

  const handlePortfolioSelect = useCallback((title) => {
    const data = portfolio.find(data => data.frontmatter.title === title);
    if(data) {
      setPortfolioData(data);
    }
    console.log(data);
  }, []);

  const portfolio: Portfolio[] = query.allMarkdownRemark.nodes;

  const {man, nextjs, gatsby, react, node, logoBackground, design, code, music} = query;

  return (
    <Layout>
      <Container>
        <Nav index={index} setIndex={setIndex}/>
        {index === 1 &&
          <>
            <ImageMan>
              <WhiteBlockEffect/>
              <div>
                <Img fluid = {man.childImageSharp.fluid} style={{display: "flex", width: man.childImageSharp.fluid.presentationWidth, height: man.childImageSharp.fluid.presentationHeight }} />
              </div>
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
        {index === 3 &&
          <>
            <Services>
              <ServicesNav index={serviceIndex} setIndex={setServiceIndex}/>
                <ServicesContent>
                {serviceIndex === 1 &&
                  <>
                    <div>
                      <img src={webDesign} alt="Web Design" style={{height: "650px"}}/>
                    </div>
                    <div>
                      <div>
                        <h1><strong>DESIGN</strong> WEB & MOBILE</h1>
                        <p>
                          Criação de telas de Lading Pages profissionais, sites, blogs,
                          e-commerce e aplicativos mobile.
                        </p>

                      </div>
                    </div>
                  </>
                }
                {serviceIndex === 2 &&
                  <>
                    <div>
                      <div>
                        <h1> <strong>DESIGN</strong> GRÁFICO</h1>
                        <p>
                          Desenvolvimento de logos, panfletos, cartão de visita e outros.
                        </p>
                      </div>
                    </div>
                    <div>
                      <img src={graphicDesign} alt="Graphic Design"/>
                    </div>
                  </>
                }
                {serviceIndex === 3 &&
                  <>
                    <div>
                      <img src={programmer} alt="Programmer" style={{height: "500px"}}/>
                    </div>
                    <div>
                      <div>
                        <h1><strong>PROGRAMAÇÃO</strong> WEB & MOBILE</h1>
                        <p>
                          Criação de Lading Pages profissionais, sites, blogs, e-commerce e aplicativos mobile.
                        </p>
                      </div>
                    </div>
                  </>
                }
                {serviceIndex === 4 &&
                  <>
                    <div>
                      <div>
                        <h1><strong>MÍDIAS SOCIAIS</strong></h1>
                        <p>
                          Posts criativos semanais e com descrição e pack de stories personalizados.
                        </p>
                      </div>
                    </div>
                    <div>
                      <img src={socialMedia} alt="Social Media" style={{height: "600px"}}/>
                    </div>
                  </>
                }

              </ServicesContent>
            </Services>
          </>
        }
        {index === 4 &&
          <>
            <Portfolio>
              <PortfolioImg>
                { portfolioData != undefined &&
                  <>
                    <Img fluid={portfolioData?.frontmatter?.thumbnail?.childImageSharp.fluid} style={{minWidth: "600px"}}/>
                  </>
                }
              </PortfolioImg>
              <PortfolioOptions>
                {
                  portfolio.map(data => (
                    <li key={data.frontmatter.title} onClick={() => handlePortfolioSelect(data.frontmatter.title)}>
                      <div>
                        <h2 >{data.frontmatter.title}</h2>
                        <p >{data.frontmatter.description}</p>
                      </div>
                    </li>
                  ))
                }
              </PortfolioOptions>
            </Portfolio>
          </>
        }
      </Container>
    </Layout>
  )
}

export default Index;
