import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Easy to Press',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Wechaty was designed from the ground up to be easily installed and
        used to get your chatbot up and running quickly.
      </>
    ),
  },
  {
    title: 'Media on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Wechaty lets you focus on your conversations, and we'll do the chores. Go
        ahead and build your business logic based on <code>Wechaty</code>.
      </>
    ),
  },
  {
    title: 'Press and Media',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your chatbot by reusing any community driven modules. Wechaty can
        be extended easily in plugins for most of the languages.
      </>
    ),
  },
]

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title='Press and Media'
      description="Read about the most recent press releases, release launches, and open source community announcements.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">For inquiries, please contact us at:</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/press')}>
              wechaty@chatie.io
            </Link>
          </div>
          <br /><br />
          <p className="hero__subtitle">We can’t wait to see what you build.</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
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
