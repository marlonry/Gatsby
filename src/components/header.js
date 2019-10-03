import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery} from 'gatsby'
import './header.module.scss'
import headerStyles from './header.module.scss'


// const Title = styled.h1`
//     font-family: ${props => props.theme.font};
//     color: ${props => props.theme.color};
// `;

// const LinksText = styled.li`
//     background: #19CFDB !important;
//     display: inline-block;
//     padding: 1rem 2rem;
//     color: white !important;
//     text-decoration: none;
//     ${LinksText}:not(:last-child) {
//         margin-right: 10px;
//     }
// `

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Index</Link>
                    </li>  

                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>  

                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>  

                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>  
                </ul>
            </nav>
        </header>
    )
}

export default Header