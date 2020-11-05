import { graphql, useStaticQuery, navigate } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Img from 'gatsby-image';
import { Container, ImageMan, WhiteDivision, BlackDivision, Stack, Home, Spans } from './styles';
import Nav from '../components/Nav';
import SEO from '../components/SEO';

const Index: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' && window.innerHeight);
  const [offsetYPos, setOffsetYPos] = useState(-135);
  const [spanIndex, setSpanIndex] = useState(1);

  const query = useStaticQuery(graphql`
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
    }
  `);

  const handleResizeWindow = useCallback(() => {
    setWindowHeight(typeof window !== 'undefined' && window.innerHeight);
  }, [windowHeight]);

  typeof window !== 'undefined' && window.addEventListener('resize', handleResizeWindow);

  const handleMouseOver = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
    const yPos = e.clientY;

    const offset = (yPos/windowHeight) * 100;

    if(yPos > windowHeight) {
      setOffsetYPos(-50);
    }

    const result = -165 + offset;
    setOffsetYPos(result);
  }, []);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const wDivision = document.getElementById('whiteDivision');
    if(wDivision) {
      const height = wDivision.clientHeight;

      const scrollPos = e.currentTarget.scrollTop;

      const offset = (scrollPos / height) * 100;

      const result = -135 + offset;
      setOffsetYPos(result);
    }
  }, []);

  const {man, nextjs, gatsby, react, node} = query;

  return (
    <Layout>
      <SEO/>
      <Container>
        <Nav pageIndex={1}/>
          <Home onMouseMove={(e) => handleMouseOver(e)} onScroll={(e) => handleScroll(e)}>
            <ImageMan>
              <div>
                <Img fluid = {man.childImageSharp.fluid} draggable={false} />
              </div>
            </ImageMan>
            <WhiteDivision offsetYPos={offsetYPos} id="whiteDivision">
              <div>
                <div>
                  <h1>Designer</h1>
                  <h1 className="designer">Designer</h1>
                  <h1 className="designer">Designer</h1>
                  <h1 className="designer">Designer</h1>
                </div>
                <Button color="var(--primary-color)" onClick={() => { navigate('/portfolio/') }}>
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
                <Spans index={spanIndex}>
                  <span onAnimationEnd={() => setSpanIndex(2)}>FRONT END</span>
                  <span onAnimationEnd={() => setSpanIndex(3)}>BACK END</span>
                  <span onAnimationEnd={() => setSpanIndex(1)}>FULL STACK</span>
                </Spans>
                <Button color= "var(--secundary-color)" onClick={() => { navigate('/portfolio/') }}>
                  Ver Trabalhos
                </Button>
              </div>
            </BlackDivision>
          </Home>
      </Container>
    </Layout>
  )
}

export default Index;
