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
            this.$refs.sidebarMenu.querySelector('a, button').focus();
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
      ['x-transition:enter']() {
        return 'transition linear duration-300';
      },
      ['x-transition:enter-start']() {
        return '-translate-x-full sm:-translate-x-64';
      },
      ['x-transition:enter-end']() {
        return 'translate-x-0';
      },
      ['x-transition:leave']() {
        return 'transition linear duration-300';
      },
      ['x-transition:leave-start']() {
        return 'translate-x-0';
      },
      ['x-transition:leave-end']() {
        return '-translate-x-full sm:-translate-x-64';
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
      ['x-transition:enter']() {
        return 'transition linear duration-300';
      },
      ['x-transition:enter-start']() {
        return 'opacity-0';
      },
      ['x-transition:enter-end']() {
        return 'opacity-100';
      },
      ['x-transition:leave']() {
        return 'transition linear duration-300';
      },
      ['x-transition:leave-start']() {
        return 'opacity-100';
      },
      ['x-transition:leave-end']() {
        return 'opacity-0';
      },
    },

    sidebarSibling: {
      [':class']() {
        return { 'lg:pl-64': this.open };
      },
    },
  };
}
