import Alpine from 'alpinejs';
import trap from '@alpinejs/trap';
import menu from './menu';
import sidebar from './sidebar';
import popover from './popover';

Alpine.plugin(trap);

Alpine.data('menu', menu);
Alpine.data('sidebar', sidebar);
Alpine.data('popover', popover);

Alpine.start();
