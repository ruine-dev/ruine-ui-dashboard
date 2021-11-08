export default function sidebar(
  options = { noScroll: false, noScrollClass: '', noScrollBreakpoint: 0 }
) {
  const { noScroll, noScrollClass, noScrollBreakpoint } = options;
  const isLowerThanScrollBreakpoint = () => window.innerWidth < noScrollBreakpoint;

  return {
    open: true,
    trap: false,

    init() {
      this.$nextTick(() => {
        if (isLowerThanScrollBreakpoint()) {
          this.open = false;
        }
        this.$watch('open', () => {
          if (this.open) {
            document.documentElement.classList.add(noScrollClass);
          } else {
            document.documentElement.classList.remove(noScrollClass);
          }
        });
      });
    },

    toggle() {
      if (!this.open) {
        this.$nextTick(() => {
          if (isLowerThanScrollBreakpoint()) {
            this.trap = true;
          }
          // TODO: remove this hack when alpine fixes the bug
          setTimeout(() => {
            this.$refs.sidebarMenu.querySelector('button:not([x-bind="sidebarClose"]), [href], input, select, textarea').focus();
          }, 50);
        });
      }

      this.open = !this.open;
    },

    close() {
      this.open = false;
      this.trap = false;
      this.$refs.sidebarButton.focus();
    },

    sidebarButton: {
      ['@click']() {
        this.toggle();
      },
      [':aria-controls']() {
        return 'sidebar';
      },
      [':aria-expanded']() {
        return this.open;
      },
    },

    sidebarClose: {
      ['@click']() {
        this.close();
      },
    },

    sidebarMenu: {
      ['x-show']() {
        return this.open;
      },
      [noScroll ? 'x-trap.noscroll' : 'x-trap']() {
        return this.trap;
      },
      ['@keydown.escape.document']() {
        if (isLowerThanScrollBreakpoint()) {
          this.close();
        }
      },
      ['@resize.window']() {
        if (isLowerThanScrollBreakpoint()) {
          this.trap = true;
        } else {
          this.trap = false;
        }
      },
      [':id']() {
        return 'sidebar';
      },
    },

    sidebarOverlay: {
      ['x-show']() {
        return this.open;
      },
      ['@click']() {
        this.close();
      },
    },
  };
}
