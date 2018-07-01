import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import LocalizedLink from '../components/LocalizedLink'

const AboutPage = ({ pageContext: { locale }, data }) => {
  const { title, back, image } = data.file.childAboutJson
  return (
    <Layout path="/about" locale={locale}>
      <h1>{title}</h1>
      <Img
        alt={image.alt}
        resolutions={image.source.childImageSharp.resolutions}
      />
      <LocalizedLink to="/">{back}</LocalizedLink>
    </Layout>
  )
}

export const query = graphql`
  query About($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "about" }) {
      childAboutJson {
        title
        back
        image {
          source {
            childImageSharp {
              resolutions(width: 125, height: 125) {
                ...GatsbyImageSharpResolutions
              }
            }
          }
          alt
        }
      }
    }
  }
`

AboutPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    file: PropTypes.shape({
      childAboutJson: PropTypes.shape({
        title: PropTypes.string.isRequired,
        back: PropTypes.string.isRequired,
        image: PropTypes.shape({
          alt: PropTypes.string.isRequired,
          source: PropTypes.object
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default AboutPage
