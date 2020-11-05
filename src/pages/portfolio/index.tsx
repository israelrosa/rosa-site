import React, { useEffect, useState } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';

import { Container, PortfolioImg, PortfolioOptions } from './styles';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Nav from '../../components/Nav';

interface PortfolioData {
  title: string;
  description: string;
  thumbnail: any;
}

interface Portfolio {
frontmatter: PortfolioData;
}

const portfolio: React.FC = () => {
  const [selectedPortfolio ,setSelectedPortfolio] = useState(0);

  const query = useStaticQuery(graphql`
  query {
    allMarkdownRemark (sort: {fields: frontmatter___title, order: ASC}) {
      nodes {
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `);

  const portfolio: Portfolio[] = query.allMarkdownRemark.nodes;
  const [portfolioData, setPortfolioData] = useState(portfolio[0]);

  useEffect(() => {
    let index = portfolio.findIndex(data => data.frontmatter.title === portfolioData.frontmatter.title);
    setSelectedPortfolio(index);
  }, [portfolioData]);

  return (
    <Layout>
      <SEO/>
      <Nav pageIndex={4}/>
      <Container>
        <PortfolioImg>
          <Img fluid={portfolioData?.frontmatter?.thumbnail?.childImageSharp.fluid}/>
        </PortfolioImg>
        <PortfolioOptions selected={selectedPortfolio}>
          {
            portfolio.map(data => (
              <li key={data.frontmatter.title} onClick={() => setPortfolioData(data)}>
                <div>
                  <h2 >{data.frontmatter.title}</h2>
                  <p >{data.frontmatter.description}</p>
                </div>
              </li>
            ))
          }
        </PortfolioOptions>
      </Container>
    </Layout>
  );
}

export default portfolio;
