import {  url } from "./url";
import  random from "./Utils/random"
import labels from "./Toolbar.json";
import { Tag } from "@carbon/ibm-security";

const icon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=";
/**
 * Generates the initial navigation model.
 */
const generateNavigationModel = ({
  href = "/" + url(random(30).toString()),
  id = `${random(30)}`,
  ...props
}) => ({
  href,
  id,
  ...props,
});

/**
 * Generates the navigation list model.
 */
const generateNavigationListModel = (title, navigation) => ({
  id: url(random(30).toString()),
  title,
  navigation,
});

/**
 * Generates data for the navigation.
 */
const generateNavigation = (array) => array.map(generateNavigationModel);

/**
 * Generates application data for the navigation.
 */
const generateApplications = (array) =>
  array.map(({ children, ...props }) => ({
    ...generateNavigationModel(props),
    children,
  }));

const applicationsToGenerate = [
  {
    title: "Painel de controle",
    icon,
    children: generateApplications([
      { title: "Resumo" },
      { title: "Estatísticas" },
    ]),
  },
];

const menu = [
  generateNavigationListModel(
    "Aplicações",
    generateApplications(applicationsToGenerate)
  ),
  generateNavigationListModel(
    "",
    generateApplications([
      {
        title: "Section 4",
        href: "/Design",
      },
      {
        title: "Section 5",
        icon,
      },
      {
        title: "Section 6",
      },
    ])
  ),
];

const settings = [
  generateNavigationListModel(
    "General settings",
    generateNavigation([
      { title: "Account" },
      { title: "Permissions" },
      { title: "Teams" },
    ])
  ),
  generateNavigationListModel(
    "Application settings",
    generateNavigation([{ title: "Application 1" }])
  ),
  generateNavigationListModel(
    "Legal",
    generateNavigation([
      { title: "Privacy", href: "./" },
      { title: "Terms" },
    ])
  ),
];

const content = `
<main>
  <article>
    <h1>Example info</h1>
    <p>You can display information in the panel with HTML.</p>
    <p>HTML tags you can use:</p>
    <ul>
      <li>
        Ordered and unordered lists
      </li>
      <li>
        Headings
      </li>
      <li>
        Paragraphs
      </li>
      <li>
        Anchors
      </li>
    </ul>
  </article>
</main>
`;

const support = [
  generateNavigationListModel(
    "Support",
    generateNavigation([
      { title: "Documentation" },
      { title: "Learn about...", content },
    ])
  ),
];

export { labels, menu, settings, support };
