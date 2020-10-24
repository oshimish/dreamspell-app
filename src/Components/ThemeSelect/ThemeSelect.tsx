import React, { useContext } from 'react'

import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import NavLink from 'react-bootstrap/NavLink';
import { AppContext } from "Context/AppContextProvider";
import { ThemesConfig, GraphicTheme } from 'consts/GraphicTheme';

const CHOICES = Object.keys(ThemesConfig).map((key, i) => {
    const theme = key as GraphicTheme;
    const config = ThemesConfig[theme];
    return {
        key: theme,
        theme,
        config
    }
});

export default function ThemeSelect() {
    const context = useContext(AppContext)!;
    const selTheme = context?.theme;
    return (

        <Dropdown as={NavItem}
            id="theme-nav-dropdown"
            drop="up"
            className="theme-nav-dropdown justify-content-end" >
            <Dropdown.Toggle
                id="theme-nav-dropdown-toggle"
                as={NavLink}>
                {selTheme.toString()}

            </Dropdown.Toggle>
            <Dropdown.Menu>
                {CHOICES
                    .filter(x => !x.config?.isDisabled)
                    .map((x, i) => (
                        <Dropdown.Item
                            key={x.key}
                            onSelect={(eventKey: string | null) => context?.setTheme(eventKey! as GraphicTheme)}
                            eventKey={x.theme.toString()}
                            active={selTheme === x.theme}>
                            {x.config.name}
                        </Dropdown.Item>)
                    )}
            </Dropdown.Menu>
        </Dropdown>
    )
}
