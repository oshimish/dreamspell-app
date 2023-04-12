import React, { ReactNode, useEffect, useState } from "react";

import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import logo from "logo.png";
import ThemeSelect from "Components/ThemeSelect/ThemeSelect";
import routes from "consts/routes";
import i18n from "i18n";
import { Link } from "react-router-dom";


const SidebarThumb = (props: { component: ReactNode }) =>
    <div className="thumb" >
        {props.component!}
    </div>;

export function Sidebar() {
    return (
        <ProSidebar defaultCollapsed={false} className="sidebar h-100">
            {/* <SidebarHeader>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="Law Of Time"
                />
            </SidebarHeader> */}
            <Menu >
                {Object.entries(routes).map((route, i) => {
                    const p = route[1];
                    return (
                        <MenuItem icon={<SidebarThumb component={p.thumb || p.component} />}  >
                            <Link to={p.path} >{i18n.t("routes." + route[0])}</Link>
                        </MenuItem>
                    )
                })}
            </Menu>
            {/* <SidebarFooter>
                <ThemeSelect />
            </SidebarFooter> */}
        </ProSidebar>
    )
}

export default Sidebar

