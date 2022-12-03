import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";

import { useState, useEffect } from "react";
import {
  Content,
  Theme,
} from "@carbon/react";

import { useSession } from "next-auth/react";

import { Shell } from "@carbon/ibm-security";
import { labels as headerLabels, links, profile } from './HeaderConfig';

import {
  labels as toolbarLabels,
  menu,
  settings,
  support,
} from './ToolbarConfig';




function UiShell({children}) {

const header = {
  labels: headerLabels,
  links,
  totalNotifications: 307,
};

const toolbar = {
  labels: toolbarLabels,
  menu,
  settings,
  support,
};

const returnToBanner = {
  application: 'Application 1',
  href: '#example',
};

const skipToContent = {
  label: 'Skip to content',
  href: '#main',
};

    const classNameFirstColumn = cx({
    "cds--col-lg-13": true,
    "cds--offset-lg-3": false,
  });
  const style = {
    height: "100%",
  };

  const shellProps = {
    header,
    profile,
    toolbar,
  };

  return (
    <>
      <Theme theme="g90">
      <Shell {...shellProps} />
        <Content id="main-content" style={style}>
          <div className="cds--grid">
            <div className="cds--row">
              <div className={classNameFirstColumn}>{children}</div>
            </div>
          </div>
        </Content>
      </Theme>
    </>
  );
}

export default UiShell;
