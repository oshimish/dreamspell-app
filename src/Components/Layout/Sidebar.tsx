import React, { ReactNode, useEffect, useState } from "react";

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

import logo from "logo.png";
import ThemeSelect from "Components/ThemeSelect/ThemeSelect";
import routes from "consts/routes";
import i18n from "i18n";
import { Link } from "react-router-dom";

import './sidebar.scss';

const SidebarThumb = (props: { component: ReactNode }) =>
    <div className="thumb" >
        {props.component!}
    </div>;

export function Sidebar() {
    return (
        <ProSidebar collapsed={false} className="sidebar h-100">
            {/* <SidebarHeader>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="Law Of Time"
                />
            </SidebarHeader> */}
            <SidebarContent>
                <Menu iconShape="square" >
                    {Object.entries(routes).map((route, i) => {
                        const p = route[1];
                        return (
                            <MenuItem icon={<SidebarThumb component={p.thumb || p.component} />}  >
                                <Link to={p.path} >{i18n.t("routes." + route[0])}</Link>
                            </MenuItem>
                        )
                    })}
                </Menu>
            </SidebarContent>
            {/* <SidebarFooter>
                <ThemeSelect />
            </SidebarFooter> */}
        </ProSidebar>
    )
}

export default Sidebar

