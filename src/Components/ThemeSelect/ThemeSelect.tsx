import React, { useContext } from 'react'

import { AppContext } from "Context/AppContextProvider";
import { ThemesConfig, GraphicTheme } from 'consts/GraphicTheme';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react';

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

    const itemOnClick = (event: any, data: DropdownItemProps) => {
        return context?.setTheme(data.value as GraphicTheme);
    };

    return (


        <Dropdown item
            text={selTheme}
            id="theme-nav-dropdown">
            <Dropdown.Menu  >
                {CHOICES
                    .filter(x => !x.config?.isDisabled)
                    .map((x, i) => (
                        <Dropdown.Item
                            key={x.key}
                            name={x.config.name}
                            value={x.key}
                            onClick={itemOnClick}
                            eventKey={x.theme.toString()}
                            active={selTheme === x.theme}>
                            {x.config.name}
                        </Dropdown.Item>)
                    )}
            </Dropdown.Menu>
        </Dropdown>
    )
}
