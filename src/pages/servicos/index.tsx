import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Nav from '../../components/Nav';

import webDesign from '../../gifs/web-design.gif';
import graphicDesign from '../../gifs/graphic-design.gif';
import programmer from '../../gifs/programmer.gif';
import socialMedia from '../../gifs/social-media.gif';

import { Container, ServicesContent, ServicesNav } from './styles';

const services: React.FC = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [serviceClientX, setServiceClientX] = useState(0);
  const [serviceOffsetX, setServiceOffsetX] = useState(0);
  const [xPos, setXPos] = useState(globalThis.innerWidth);


  const handleResizeWindow = useCallback(() => {
    setXPos(globalThis.innerWidth);
  }, [])

  globalThis.addEventListener('resize', handleResizeWindow);

  const handleChangeIndex = useCallback((index) => {
    const carousel = document.getElementById('serviceContent');
    if(carousel) {
      carousel.style.transform = `translate3d(${-xPos * index}px, 0px, 0)`;
      carousel.style.transition = "500ms";
    }

    setServiceIndex(index);
  }, [serviceIndex]);

  const handleServiceTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setServiceClientX(e.targetTouches[0].clientX);
  }, []);

  const handleServiceTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setServiceOffsetX(e.targetTouches[0].clientX);
  }, [])

  const handleServiceTouchEnd = useCallback(() => {
    if(serviceOffsetX > (serviceClientX + 50)) {
      serviceIndex === 0? handleChangeIndex(3) : handleChangeIndex(serviceIndex - 1);
    } else if(serviceOffsetX < (serviceClientX - 50)) {
      serviceIndex === 3? handleChangeIndex(0) : handleChangeIndex(serviceIndex + 1);
    }
  }, [serviceClientX, serviceOffsetX]);

  return (
    <Layout >
      <SEO/>
      <Nav pageIndex={3}/>
      <Container onTouchStart={(e) => handleServiceTouchStart(e)} onTouchMove={(e) => handleServiceTouchMove(e)} onTouchEnd={() => handleServiceTouchEnd()}>
        <ServicesNav index={serviceIndex}>
          <li><button onClick={() => handleChangeIndex(0)}>1</button></li>
          <li><button onClick={() => handleChangeIndex(1)}>2</button></li>
          <li><button onClick={() => handleChangeIndex(2)}>3</button></li>
          <li><button onClick={() => handleChangeIndex(3)}>4</button></li>
        </ServicesNav>
        <ServicesContent id="serviceContent">
          <section>
            <div>
              <img src={webDesign} alt="Web Design" style={{maxHeight: "600px"}}/>
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
          </section>
          <section>
            <div>
              <div>
                <h1> <strong>DESIGN</strong> GRÁFICO</h1>
                <p>
                  Desenvolvimento de logos, panfletos, cartão de visita e outros.
                </p>
              </div>
            </div>
            <div>
              <img src={graphicDesign} alt="Graphic Design" style={{ maxHeight: "600px"}} />
            </div>
          </section>
          <section>
            <div>
              <img src={programmer} alt="Programmer" style={{ maxHeight: "500px"}}/>
            </div>
            <div>
              <div>
                <h1><strong>PROGRAMAÇÃO</strong> WEB & MOBILE</h1>
                <p>
                  Criação de Lading Pages profissionais, sites, blogs, e-commerce e aplicativos mobile.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div>
                <h1><strong>MÍDIAS SOCIAIS</strong></h1>
                <p>
                  Posts criativos semanais e com descrição e pack de stories personalizados.
                </p>
              </div>
            </div>
            <div>
              <img src={socialMedia} alt="Social Media" style={{maxHeight: "600px"}}/>
            </div>
          </section>
        </ServicesContent>
      </Container>
    </Layout>
  );
}

export default services;
