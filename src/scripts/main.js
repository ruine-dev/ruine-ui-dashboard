import Alpine from 'alpinejs';
import trap from '@alpinejs/trap';
import menu from './menu';
import popover from './popover';
import sidebar from './sidebar';
import sidebarSub from './sidebarsub';

Alpine.plugin(trap);

Alpine.data('menu', menu);
Alpine.data('popover', popover);
Alpine.data('sidebar', sidebar);
Alpine.data('sidebarSub', sidebarSub);

Alpine.start();
