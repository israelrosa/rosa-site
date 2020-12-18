import React from 'react';
import { Container, Logo, SocialMedia, Main} from './styles';
import {graphql, useStaticQuery} from 'gatsby';
import { GlobalStyle } from '../../theme/global-style';
import Img from "gatsby-image";

const Layout: React.FC = ({children}) => {
  const {logo, github, instagram, linkedin} = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 35, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(width: 31, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Logo>
          <Img fixed={logo.childImageSharp.fixed}/>
          <section/>
          <strong>ISRAEL ROSA</strong>
        </Logo>
        <Main>
        { children }
        </Main>
        <SocialMedia>
          <li>
            <a href="https://github.com/israelrosa">
              <Img fixed={github.childImageSharp.fixed}/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/israelp.rosa/">
              <Img fixed={instagram.childImageSharp.fixed}/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/piresr-israel">
              <Img fixed={linkedin.childImageSharp.fixed}/>
            </a>
          </li>
          <li>
            <span>Siga-me</span>
          </li>
        </SocialMedia>
      </Container>
    </>
  )
}

export default Layout;
