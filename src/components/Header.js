import React from 'react';
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    const navTitle = ['Testing Logo', 'Home', 'About', 'Brand', 'Accessories', 'Search', 'Account', 'Cart'];
    return (
        <>
            <Nav
                className="justify-content-center"
                activeKey="/home"
                as="ul"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                {navTitle.map((variant)=> (
                    <Nav.Item as="li" id={variant}>
                        <Nav.Link href={variant}>{variant}</Nav.Link>
                    </Nav.Item>    
                    ),
                )}
            </Nav>
        </>
    )
};

export default Header;