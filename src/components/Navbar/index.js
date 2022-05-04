import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import {
  Nav,
  MobileIcon,
  NavbarContainer,
  NavIcon,
  NavLogo,
} from './NavbarElements'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollTo >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => setClick(!click)

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Explor
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar