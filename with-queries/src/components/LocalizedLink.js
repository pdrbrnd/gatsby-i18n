import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { LocaleConsumer } from './Layout'

import locales from '../constants/locales'

const LocalizedLink = ({ to, ...props }) => (
  <LocaleConsumer>
    {locale => {
      const path = locales[locale].default ? to : `/${locale}${to}`

      return <Link {...props} to={path} />
    }}
  </LocaleConsumer>
)

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default LocalizedLink
