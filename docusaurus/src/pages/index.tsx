import React from 'react'
import type { FunctionComponent } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

import type { DocusaurusConfig } from '@docusaurus/types'

void React

// one-pager - Encapsulates the essence of a technology onto a single page.

const features = [
  {
    description: (
      <>
        Wechaty was designed from the ground up to be easily installed and
        used to get your chatbot up and running quickly.
      </>
    ),
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    title: 'Easy to Use',
  },
  {
    description: (
      <>
        Wechaty lets you focus on your conversations, and we'll do the chores. Go
        ahead and build your business logic based on <b>Wechaty</b>.
      </>
    ),
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    title: 'Focus on What Matters',
  },
  {
    description: (
      <>
        You are welcome to join our <b>Wechaty Developers' Home</b> by
        scanning the above QR code,
        then send the secret code <code>wechaty</code> to <i>Friday.BOT</i>.
      </>
    ),
    imageUrl: 'img/friday-qrcode.svg',
    title: 'Join our WeChat Room',
  },
]

const Feature: FunctionComponent<any> = ({ key, imageUrl, title, description }) => {
  void key
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles['feature'])}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles['featureImage']} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} as Partial<DocusaurusConfig> } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="RPA SDK for Chatbot Makers.">
      <header className={clsx('hero hero--primary', styles['heroBanner'])}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles['buttons']}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles['getStarted'],
              )}
              to={useBaseUrl('/docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles['features']}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key = {idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
