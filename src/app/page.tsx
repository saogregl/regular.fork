"use client";

import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";

import "../styles/index.scss";
import "./index.scss";
import { Card, StatusIcon } from "@carbon/ibm-security";
import { Button } from "@carbon/react";
import { useState, useEffect } from "react";
import { Fade } from "@carbon/icons-react";
import { Content, Theme, Layer } from "@carbon/react";

const footerDescription = "Status";

const headerPrefix = `header.`;

export default function Home() {
  function Component() {
    const { data: session, status } = useSession();
    if (status === "authenticated") {
      return (
        <>
          <div>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </div>
          <br />

          <Button
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </Button>
        </>
      );
    }

    return <a href="/api/auth/signin">Sign in</a>;
  }
  const { data: session, status } = useSession();

  return (
    <>
      <Theme theme="g90">
        <div className="dashboard-content">
          <div className="bx--grid">
          <div className="bx--row">
          <div className="bx--col bx--col-padding">

          <h1>Bem vindo de volta,             <strong>session.user</strong></h1>
          <p>Veja o que está acontecendo hoje.</p>
          </div>
          </div>

            <div className="bx--row">
              <div className="bx--col bx--col-padding">
                <div className="outside">
                  <div className="inside">
                    <Card label="Icon label (label)" link="./" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bx--row bx--row-padding">
              <div className="bx--col">
                <div className="outside">
                  <div className="inside">
                    <Card
                      body={{
                        text: "Description",
                      }}
                      className=""
                      footer={{
                        children: (
                          <StatusIcon
                            className={null}
                            description="Status"
                            iconDescription={null}
                            message="Status"
                            size="md"
                            status="success"
                          />
                        ),
                      }}
                      header={{
                        image:
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                        tag: "Subtitle",
                        title: "Title",
                      }}
                      label="Image label"
                      link="#"
                      onClick={function noRefCheck() {}}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="bx--col">
                <div className="outside">
                  <div className="inside">
                    <Card
                      body={{
                        text: "Description",
                      }}
                      className=""
                      footer={{
                        children: (
                          <StatusIcon
                            className={null}
                            description="Status"
                            iconDescription={null}
                            message="Status"
                            size="md"
                            status="success"
                          />
                        ),
                      }}
                      header={{
                        image:
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                        tag: "Subtitle",
                        title: "Title",
                      }}
                      label="Image label"
                      link="#"
                      onClick={function noRefCheck() {}}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="bx--col">
                <div className="outside">
                  <div className="inside">
                    <Card
                      body={{
                        text: "Description",
                      }}
                      className=""
                      footer={{
                        children: (
                          <StatusIcon
                            className={null}
                            description="Status"
                            iconDescription={null}
                            message="Status"
                            size="md"
                            status="success"
                          />
                        ),
                      }}
                      header={{
                        image:
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                        tag: "Subtitle",
                        title: "Title",
                      }}
                      label="Image label"
                      link="#"
                      onClick={function noRefCheck() {}}
                    />
                  </div>
                </div>
              </div>
              <div className="bx--col">
                <div className="outside">
                  <div className="inside">
                    <Card
                      body={{
                        text: "Description",
                      }}
                      className=""
                      footer={{
                        children: (
                          <StatusIcon
                            className={null}
                            description="Status"
                            iconDescription={null}
                            message="Status"
                            size="md"
                            status="success"
                          />
                        ),
                      }}
                      header={{
                        image:
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                        tag: "Subtitle",
                        title: "Title",
                      }}
                      label="Image label"
                      link="#"
                      onClick={function noRefCheck() {}}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="bx--row bx--row-padding">
              <div className="bx--col">
                <div className="outside">
                  <div className="inside">
                    <Card
                      body={{
                        text: "Description",
                      }}
                      className=""
                      footer={{
                        children: (
                          <StatusIcon
                            className={null}
                            description="Status"
                            iconDescription={null}
                            message="Status"
                            size="md"
                            status="success"
                          />
                        ),
                      }}
                      header={{
                        image:
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                        tag: "Subtitle",
                        title: "Title",
                      }}
                      label="Image label"
                      link="#"
                      onClick={function noRefCheck() {}}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Theme>
    </>
  );
}
