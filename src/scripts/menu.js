export default function dropdown(menuItems = []) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    open: false,
    active: null,
    menuItems,
    length: menuItems.flat().length,

    init() {
      this.$nextTick(() => {
        const menuItems = this.$refs.menuList.querySelectorAll('[role=menuitem]');
        this.$watch('active', (value, oldValue) => {
          if (value !== null) {
            menuItems[value - 1].focus();
          } else {
            menuItems[oldValue - 1].blur();
          }
        });

        document.addEventListener('keydown', event => {
          const isArrowUp = event.key === 'ArrowUp';
          const isArrowDown = event.key === 'ArrowDown';

          if (this.open && this.active === null && (isArrowUp || isArrowDown)) {
            event.preventDefault();
            if (isArrowUp) {
              this.active = this.length;
            }
            if (isArrowDown) {
              this.active = 1;
            }
          }
        });
      });
    },

    close() {
      this.open = false;
      this.active = null;
    },

    toggle() {
      if (this.open) {
        this.active = null;
        this.$refs.menuButton.focus();
      }

      this.open = !this.open;
    },

    focusPreviousMenu() {
      if (this.active === null) {
        this.$refs.menuButton.blur();
        this.active = this.length;
        return;
      }
      if (this.active === 1) {
        return;
      }
      this.active -= 1;
    },

    focusNextMenu() {
      if (this.active === null) {
        this.$refs.menuButton.blur();
        this.active = 1;
        return;
      }
      if (this.active === this.length) {
        return;
      }
      this.active += 1;
    },

    menu: {
      ['@click.outside']() {
        this.close();
      },
    },

    menuButton: {
      ['@click']() {
        this.toggle();
      },
      [':id']() {
        return `menu-button-${this.id}`;
      },
      [':aria-haspopup']() {
        return true;
      },
      [':aria-expanded']() {
        return this.open;
      },
      [':aria-controls']() {
        return `menu-items-${this.id}`;
      },
    },

    menuList: {
      ['x-show']() {
        return this.open;
      },
      [':role']() {
        return 'menu';
      },
      [':id']() {
        return `menu-items-${this.id}`;
      },
      [':aria-labelledby']() {
        return `menu-button-${this.id}`;
      },
    },

    menuItem: {
      ['@keydown.tab.prevent']() {},
      ['@keydown.escape']() {
        this.toggle();
      },
      ['@keydown.arrow-up.prevent']() {
        this.focusPreviousMenu();
      },
      ['@keydown.arrow-down.prevent']() {
        this.focusNextMenu();
      },
      ['@mouseleave']() {
        this.active = null;
      },
      ['@click']() {
        this.close();
      },
      [':role']() {
        return 'menuitem';
      },
      [':tabindex']() {
        return -1;
      },
    },
  };
}
