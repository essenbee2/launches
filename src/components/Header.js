import React from "react"
import { Container } from "semantic-ui-react"
import logo from '../logo.svg';

const Header = () => (
    <div>
        <header className="ui inverted stackable menu">
            <Container>
                <h1 className="header item">
                        <span>
                            <img className="ui avatar image" src={logo} alt="Codebase Alpha logo" />
                            CodebaseAlpha.dev
                        </span>
                </h1>
            </Container>
        </header>
    </div>
)

export default Header