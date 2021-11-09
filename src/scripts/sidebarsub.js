export default function sidebarSub(initialOpen) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    open: initialOpen,

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

    sidebarSubMenu: {
      ['x-show']() {
        return this.open;
      },
      // TODO: uncomment below code after alpine fix focus bug
      // ['x-collapse']() {},
      [':id']() {
        return `sidebar-sub-menu-${this.id}`;
      },
    },
  };
}
