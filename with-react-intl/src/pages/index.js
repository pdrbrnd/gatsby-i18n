import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'
import LocalizedLink from '../components/LocalizedLink'

const IndexPage = ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <h1>
      <FormattedMessage id="hi" />
    </h1>
    <p>
      <FormattedMessage id="welcome" />
    </p>
    <LocalizedLink to="/about/">
      <FormattedMessage id="about" />
    </LocalizedLink>
  </Layout>
)

IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired
}

export default IndexPage
