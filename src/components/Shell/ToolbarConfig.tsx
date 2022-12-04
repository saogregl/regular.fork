import {  url } from "./url";
import  random from "./Utils/random"
import labels from "./Toolbar.json";
import { Tag } from "@carbon/ibm-security";
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

const icon =
  "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOndoaXRlO308L3N0eWxlPjwvZGVmcz48dGl0bGU+ZGF0YS12aXMtLTE8L3RpdGxlPjxwYXRoIGQ9Ik0yNiwyMmEzLjk1NTMsMy45NTUzLDAsMCwwLTIuMDE5My41NjY3TDIwLjE2NywxOC43NTI5YTQuOTY1NCw0Ljk2NTQsMCwwLDAsMC01LjUwNThMMjIuNzE0LDEwLjdBMy4wMjg0LDMuMDI4NCwwLDEsMCwyMS4zLDkuMjg2bC0yLjU0NywyLjU0N2E0Ljk2NTQsNC45NjU0LDAsMCwwLTUuNTA1OCwwTDkuNDMzMiw4LjAxOTFBMy45NTUzLDMuOTU1MywwLDAsMCwxMCw2YTQsNCwwLDEsMC00LDQsMy45NTUzLDMuOTU1MywwLDAsMCwyLjAxOTEtLjU2NjhsMy44MTM5LDMuODEzOWE0Ljk2NTQsNC45NjU0LDAsMCwwLDAsNS41MDU4TDguMDE5MiwyMi41NjY4QTMuOTU1NiwzLjk1NTYsMCwwLDAsNiwyMmE0LDQsMCwxLDAsNCw0LDMuOTU1MywzLjk1NTMsMCwwLDAtLjU2NjctMi4wMTkybDMuODEzOC0zLjgxMzhBNC45Njg2LDQuOTY4NiwwLDAsMCwxNSwyMC44OTg5djMuMjg0OGEzLDMsMCwxLDAsMiwwVjIwLjg5ODlhNC45Njg2LDQuOTY4NiwwLDAsMCwxLjc1MjktLjczMTlsMy44MTM4LDMuODEzN0EzLjk1NTMsMy45NTUzLDAsMCwwLDIyLDI2YTQsNCwwLDEsMCw0LTRaTTE2LDEzYTMsMywwLDEsMS0zLDNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiwxM1pNNCw2QTIsMiwwLDEsMSw2LDgsMi4wMDIsMi4wMDIsMCwwLDEsNCw2Wk02LDI4YTIsMiwwLDEsMSwyLTJBMi4wMDIzLDIuMDAyMywwLDAsMSw2LDI4Wm0yMCwwYTIsMiwwLDEsMSwyLTJBMi4wMDI3LDIuMDAyNywwLDAsMSwyNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc+"
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
        title: "Projeto e desenvolvimento",
        href: "/Design",
      },
      {
        title: "Planejamento",
        href: "/Planning",
      },
      {
        title: "Manufatura",
        href: "/Manufacturing",

      },
      {
        title: "Validação",
        href: "/Validation",
      },

      {
        title: "Análise",
        href: "/Analysis",
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
