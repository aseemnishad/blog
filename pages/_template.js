import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import 'css/awesome.css'
const style = {
  header: {
    marginBottom: rhythm(1.5)
  },
  footer: {
    marginTop: 50,
    fontSize: 12,
    flex: 65,
    marginRight: 0,
    marginLeft: 0,
    textAlign: 'center'
  },
  social: {
    textAlign: 'right',
  },  
  icon: {
    marginLeft: 5,
    marginRight: 5,
    textDecoration:'none',
    boxShadow: 'none'  
  },
  h1: {
    marginBottom: 0,
    fontSize: scale(1.5).fontSize,
    lineHeight: scale(1.5).lineHeight,
    marginTop: 0
  },
  h2: {
    marginTop: 0,
    textAlign: 'center'
  },
  h3: {
    fontFamily: 'Montserrat, sans-serif',
    marginTop: 0
  },
  img: {
    margin: 0,
    border: 0,
    width: '1em',
    height: '1em',
    verticalAlign: 'middle'
  },
  Link: {
    boxShadow: 'none',
    textDecorationLine: 'none',
    color: 'inherit'
  },
  Container: {
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
  }
}

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <header style={style.header}>
        <div style={style.social}>
          <a className='so-icon' href="https://twitter.com/aseemnishad" style={style.icon}><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="mailto:aseem@bititude.com" style={style.icon}><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
          <a href="https://github.com/aseemnishad" style={style.icon}><i className="fa fa-github" aria-hidden="true"></i></a>
         </div> 

          <h1 style={style.h1}><Link style={style.Link} to={prefixLink('/')} >{`<${config.blogTitle}/>`}</Link></h1>
          <h2 style={style.h2}>{config.subTitle}</h2>
        </header>
      )
    } else {
      header = (
        <header>
          <div style={style.social}>
          <a className='so-icon' href="https://twitter.com/aseemnishad" style={style.icon}><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="mailto:aseem@bititude.com" style={style.icon}><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
          <a href="https://github.com/aseemnishad" style={style.icon}><i className="fa fa-github" aria-hidden="true"></i></a>
         </div> 
          <h3 style={style.h3}><Link style={style.Link} to={prefixLink('/')} > {'<'}{config.blogTitle}{'/>'} </Link></h3>
        </header>
      )
    }
    let footer = (<div style={style.footer}>Copyright © 2017 by Aseem Nishad</div>)
    return (
    <Container style={style.Container}>
      {header}
      {children}
      {footer}
    </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template
