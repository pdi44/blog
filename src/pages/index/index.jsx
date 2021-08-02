import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Parallax } from "react-parallax";
import AnimationComponent from '../../components/AnimationComponent';
import BannerImage from './img/banner_image.jpg';
import Slogan from './img/slogan.png';
import './index.scss';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Parallax
      className={clsx('hero hero--primary', styles.heroBanner)}
      bgImage={BannerImage}
      bgClassName='hero--primary-bg'
      strength={800}
      blur={{ min: -16, max: 15 }}
      renderLayer={
        (percentage) => (
          <AnimationComponent percentage={percentage}>
            <div className="container">
              <img
                src={Slogan}
                className='slogan'
              ></img>
            </div>
          </AnimationComponent>
        )
      }
    >
      {/* <AnimationComponent>
        <div className="container">
          <img
            src={Slogan}
            className='slogan'
          ></img>
        </div>
      </AnimationComponent> */}
    </Parallax>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

    </Layout>
  );
}
