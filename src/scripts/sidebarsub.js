export default function sidebarSub() {
  return {
    id: Math.random().toString(36).substr(2, 9),
    open: false,

    toggle() {
      this.open = !this.open;
    },

    sidebarSubButton: {
      ['@click']() {
        this.toggle();
      },
      [':aria-controls']() {
        return `sidebar-sub-menu-${this.id}`;
      },
      [':aria-expanded']() {
        return this.open;
      },
    },

    sidebarSubButtonIcon: {
      [':class']() {
        return { 'rotate-180': this.open };
      },
    },

    sidebarSubMenu: {
      ['x-show']() {
        return this.open;
      },
      [':id']() {
        return `sidebar-sub-menu-${this.id}`;
      },
    },
  };
}
