import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'
import LocalizedLink from '../components/LocalizedLink'

const SecondPage = ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <h1>
      <FormattedMessage id="about" />
    </h1>
    <p>
      <FormattedMessage id="aboutCopy" />
    </p>
    <LocalizedLink to="/">
      <FormattedMessage id="backToHomepage" />
    </LocalizedLink>
  </Layout>
)

SecondPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired
}

export default SecondPage
