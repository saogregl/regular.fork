"use client";

import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { redirect } from "next/navigation";
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
  const { data: session, status } = useSession();

  function makeEveryFirstLetterCapital(str) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  console.log("session", session);
  console.log("status", status);

  if (status === "loading") {
    return (
      <div className="dashboard-content">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col bx--col-padding">
              <h1>Loading</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (status != "authenticated") {
    redirect("/auth");
  } else {
    return (
      <>
        <Theme theme="g90">
          <div className="dashboard-content">
            <div className="bx--grid">
              <div className="bx--row">
                <div className="bx--col bx--col-padding">
                  <h1>
                    Bem vindo de volta,{" "}
                    <strong>
                      {makeEveryFirstLetterCapital(session.user.name)}
                    </strong>
                  </h1>
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
}
