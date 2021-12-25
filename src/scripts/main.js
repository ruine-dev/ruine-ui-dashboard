import Alpine from 'alpinejs';
import trap from '@alpinejs/trap';
import collapse from '@alpinejs/collapse';
import dialog from './dialog.js';
import menu from './menu.js';
import popover from './popover.js';
import sidebar from './sidebar.js';
import sidebarSub from './sidebarsub.js';

Alpine.plugin(trap);
Alpine.plugin(collapse);

Alpine.data('dialog', dialog);
Alpine.data('menu', menu);
Alpine.data('popover', popover);
Alpine.data('sidebar', sidebar);
Alpine.data('sidebarSub', sidebarSub);

Alpine.start();
