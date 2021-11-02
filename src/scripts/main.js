import Alpine from 'alpinejs';
import menu from './menu';
import sidebar from './sidebar';

Alpine.data('menu', menu);
Alpine.data('sidebar', sidebar);

Alpine.start();
