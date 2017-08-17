import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'connect/clubs', title: 'Clubs', menuType: MenuType.LEFT, icon: 'material-icons' },
  { path: 'connect/meetings', title: 'Meetings', menuType: MenuType.LEFT, icon: 'material-icons' },
  { path: 'connect/people', title: 'People', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'setups', title: 'Setups', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'discuss/forums', title: 'Forums', menuType: MenuType.LEFT, icon: 'material-icons' },
  { path: 'discuss/blogs', title: 'Blogs', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'learn/articles', title: 'Articles', menuType: MenuType.LEFT, icon: 'material-icons' },
  { path: 'learn/videos', title: 'Videos', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'profile', title: 'Profile', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'admin/clubs', title: 'Manage Clubs', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'about', title: 'About Us', menuType: MenuType.LEFT, icon: 'material-icons' },

  { path: 'admin/setups', title: 'Manage Setups', menuType: MenuType.LEFT, icon: 'material-icons' },
  { path: 'admin/forums', title: 'Manage Forums', menuType: MenuType.LEFT, icon: 'material-icons' },
];
