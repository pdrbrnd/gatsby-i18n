import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import locales from '../constants/locales'

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()

const Layout = ({ children, path, locale }) => (
  <LocaleProvider value={locale}>
    <ul>
      {Object.keys(locales).map(key => (
        <li key={locales[key].locale}>
          <Link
            to={locales[key].default ? path : `/${locales[key].path}${path}`}
          >
            {locales[key].locale}
          </Link>
        </li>
      ))}
    </ul>
    <div>{children}</div>
  </LocaleProvider>
)

export { LocaleConsumer }

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  path: PropTypes.string,
  locale: PropTypes.string.isRequired
}

Layout.defaultProps = {
  path: '/'
}

export default Layout
