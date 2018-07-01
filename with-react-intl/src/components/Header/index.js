import React from 'react'
import { Link } from 'gatsby'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

import LocalizedLink from '../LocalizedLink'

import locales from '../../constants/locales'

import styles from './style.module.css'

const Header = ({ intl: { locale } }) => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <h1 style={{ margin: 0 }}>
        <LocalizedLink to="/">
          <FormattedMessage id="siteTitle" />
        </LocalizedLink>
      </h1>
      <nav className={styles.language}>
        {Object.keys(locales).map(key => (
          <Link
            className={key === locale ? styles.active : ''}
            key={locales[key].locale}
            to={locales[key].default ? '/' : `/${locales[key].path}`}
          >
            {locales[key].locale}
          </Link>
        ))}
      </nav>
    </div>
  </div>
)

Header.propTypes = { intl: intlShape.isRequired }

export default injectIntl(Header)
