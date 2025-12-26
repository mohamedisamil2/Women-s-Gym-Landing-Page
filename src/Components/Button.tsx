import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll' 
import { SelectedPage } from '../Shared/share'


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value : SelectedPage) => void
}

function Button( {children, setSelectedPage}:Props) {
  return (
          <AnchorLink
              className='bg-amber-500 hover:bg-amber-600 hover:text-gray-50 py-2 px-6 rounded-md border-0'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>
          {children}
      </AnchorLink>
  )
}

export default Button
