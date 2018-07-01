import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import LocalizedLink from '../components/LocalizedLink'

const IndexPage = ({ pageContext: { locale }, data }) => {
  const { title, about } = data.file.childIndexJson
  return (
    <Layout path="/" locale={locale}>
      <h1>{title}</h1>
      <LocalizedLink to="/about">{about}</LocalizedLink>
    </Layout>
  )
}

export const query = graphql`
  query Home($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        title
        about
      }
    }
  }
`

IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    file: PropTypes.shape({
      childIndexJson: PropTypes.shape({
        title: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default IndexPage
