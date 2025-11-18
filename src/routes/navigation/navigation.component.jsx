/**
 * LESSON: React Router Navigation & Outlet
 * 
 * Key Concepts:
 * 1. <Outlet />: Placeholder where child route components will render
 * 2. <Link>: Navigate between routes without page reload (better than <a>)
 * 3. <Fragment>: Group elements without adding extra DOM nodes
 * 4. SVG as Component: Import SVG as ReactComponent for dynamic styling
 */

import { Outlet, Link } from "react-router-dom"
import { Fragment } from 'react'

import {ReactComponent as ClwlLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
const Navigation = () => {
  return (
    <Fragment>
        <div className="navigation">
           <Link className="logo-container" to= '/'>
            <ClwlLogo className="logo" />
           </Link>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation