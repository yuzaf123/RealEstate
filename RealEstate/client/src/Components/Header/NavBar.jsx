import React from 'react'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import DesktopNavBar from './DesktopNavBar';
import MobileNav from './MobileNav';

const NavBar = () => {
  return (
    <div>
      <BrowserView>
      <DesktopNavBar />
      </BrowserView>
      <MobileView>
        <MobileNav />
      </MobileView>
    </div>
  )
}

export default NavBar






