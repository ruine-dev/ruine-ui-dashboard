export default function menu(menuItems = []) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    open: false,
    active: null,
    menuItems: addIndexToEachMenuItem(menuItems),
    length: menuItems.flat().length,

    init() {
      this.$nextTick(() => {
        const menuItems = this.$refs.menuList.querySelectorAll('[role=menuitem]');
        this.$watch('active', value => {
          if (value !== null) {
            menuItems[value - 1].focus();
          } else {
            this.$refs.menuList.focus();
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
        this.$nextTick(() => {
          this.$refs.menuButton.focus();
        });
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
      ['@keydown.escape']() {
        this.close();
        this.$nextTick(() => {
          this.$refs.menuButton.focus();
        });
      },
    },

    menuButton: {
      ['@click']() {
        this.toggle();
        this.$nextTick(() => {
          this.$refs.menuList.focus();
        });
      },
      ['@keydown.space']() {
        this.$nextTick(() => {
          this.$refs.menuList.querySelector('[role=menuitem]').focus();
        });
      },
      ['@keydown.enter']() {
        this.$nextTick(() => {
          this.$refs.menuList.querySelector('[role=menuitem]').focus();
        });
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
      ['@keydown.tab.prevent']() {},
      ['@keydown.arrow-up.prevent']() {
        this.focusPreviousMenu();
      },
      ['@keydown.arrow-down.prevent']() {
        this.focusNextMenu();
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
      [':tabindex']() {
        return 0;
      },
    },

    menuItem: {
      ['@keydown.tab.prevent']() {},
      ['@keydown.arrow-up.prevent.stop']() {
        this.focusPreviousMenu();
      },
      ['@keydown.arrow-down.prevent.stop']() {
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

const addIndexToEachMenuItem = menuItems => {
  let index = 0;

  const flatMenuItemsWithArrayIndex = menuItems.flatMap((menuItem, arrIndex) => {
    return menuItem.map(item => {
      index++;
      return {
        ...item,
        arrIndex,
        index,
      };
    });
  });

  return flatMenuItemsWithArrayIndex.reduce((acc, item) => {
    const { arrIndex } = item;
    if (!acc[arrIndex]) {
      acc[arrIndex] = [];
    }
    acc[arrIndex].push(item);
    return acc;
  }, []);
};
