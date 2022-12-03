import { labels as headerLabels, links, profile } from './HeaderConfig';

import {
  labels as toolbarLabels,
  menu,
  settings,
  support,
} from './ToolbarConfig';

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

export { header, profile, toolbar, returnToBanner, skipToContent };