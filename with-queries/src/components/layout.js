import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()

const Layout = ({ children, path, locale }) => (
  <LocaleProvider value={locale}>
    <ul>
      <li>
        <Link to={path}>English</Link>
      </li>
      <li>
        <Link to={`/pt${path}`}>Portuguese</Link>
      </li>
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
