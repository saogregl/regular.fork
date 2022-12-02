"use client";

import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";

import { useState, useEffect } from "react";
import {
  Content,
  Button,
  Modal,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavDivider,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  Theme,
  Grid,
  Row,
  Column,
  FlexGrid,
  ExpandableSearch,
} from "@carbon/react";

import {
  Search,
  Notification,
  Fade,
  Switcher as SwitcherIcon,
  SettingsAdjust,
  UserAvatarFilledAlt,
  DataVis_1,
  OperationsRecord,
  Asset,
  ToolKit,
  Watson,
  FlowLogsVpc,
} from "@carbon/icons-react";






export default function Home() {
  const [onClickSwitcher, setonClickSwitcher] = useState(false);
  const [isSideNavExpanded, setisSideNavExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const classNameFirstColumn = cx({
    "cds--col-lg-13": true,
    "cds--offset-lg-3": false,
  });
  const style = {
    height: "100%",
  };


  function Component() {
    const { data: session, status } = useSession()
  
    if (status === "authenticated") {
      return (            <>
        <div>
          <small>Signed in as</small>
          <br />
          <strong>{session.user.email || session.user.name}</strong>
        </div>
        <br />

        <Button
          href={`/api/auth/signout`}
          onClick={(e) => {
            e.preventDefault()
            signOut()
          }}
        >
          Sign out
        </Button>
      </>
)
    }
  
    return <a href="/api/auth/signin">Sign in</a>
  }
  

  return (
    <>
      <Theme theme="g90">
        <Header aria-label="IBM Platform Name">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={() => setisSideNavExpanded(!isSideNavExpanded)}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="Jacto">
            [SIPE]
          </HeaderName>
          <HeaderNavigation aria-label="Jacto [SIPE]">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction tooltipAlignment="end" aria-label="Search">
              <Search size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              isActive={onClickSwitcher}
              onClick={() => setonClickSwitcher(!onClickSwitcher)}
              tooltipAlignment="center"
            >
              <SwitcherIcon size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>

          <HeaderPanel aria-label="Header Panel" expanded={onClickSwitcher}>
            <Switcher aria-label="Switcher Container">
              <SwitcherItem isSelected aria-label="Link 1" href="#">
                Link 1
              </SwitcherItem>
              <SwitcherDivider />
              <SwitcherItem href="#" aria-label="Link 2">
                Link 2
              </SwitcherItem>
              <SwitcherItem href="#" aria-label="Link 3">
                Link 3
              </SwitcherItem>
              <SwitcherItem href="#" aria-label="Link 4">
                Link 4
              </SwitcherItem>
              <SwitcherItem href="#" aria-label="Link 5">
                Link 5
              </SwitcherItem>
              <SwitcherDivider />
              <SwitcherItem href="#" aria-label="Link 6">
                Link 6
              </SwitcherItem>
            </Switcher>
          </HeaderPanel>
          <SideNav
            aria-label="Side navigation"
            isRail
            expanded={isSideNavExpanded}
          >
            <SideNavItems>
              <SideNavLink renderIcon={Fade} href="/">
                Dashboard
              </SideNavLink>
              <SideNavLink renderIcon={Asset} href="/Design">
                Design
              </SideNavLink>
              <SideNavLink
                renderIcon={OperationsRecord}
                href="/Planning"
              >
                Planning
              </SideNavLink>

              <SideNavLink renderIcon={ToolKit} href="/Manufacturing">
                Manufacturing
              </SideNavLink>

              <SideNavLink renderIcon={Watson} href="/Validation">
                Validation
              </SideNavLink>

              <SideNavLink renderIcon={FlowLogsVpc} href="/Analysis">
                Analysis
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </Header>
        <Content id="main-content" style={style}>

        <div className="cds--grid">
      <div className="cds--row">
        <div className={classNameFirstColumn}>
          {Component()}
        </div>
      </div>
    </div>
    </Content>

      </Theme>
    </>
  );
}

