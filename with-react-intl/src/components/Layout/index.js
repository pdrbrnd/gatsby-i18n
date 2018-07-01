import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'

// Locale data
import enData from 'react-intl/locale-data/en'
import ptData from 'react-intl/locale-data/pt'

// Messages
import en from '../../i18n/en.json'
import pt from '../../i18n/pt.json'

// Style
import './reset.css'
import styles from './style.module.css'

// Components
import Header from '../Header'

const messages = { en, pt }

addLocaleData([...enData, ...ptData])

const Layout = ({ locale, children }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    <Fragment>
      <Header />
      <div className={styles.content}>{children}</div>
    </Fragment>
  </IntlProvider>
)

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

export default Layout
