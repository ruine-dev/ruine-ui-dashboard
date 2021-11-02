export default function sidebar() {
  return {
    open: true,

    init() {
      document.addEventListener('keydown', event => {
        if (this.open && event.key === 'Escape') {
          if (window.innerWidth < 1024) {
            this.close();
          }
        }
      });
    },

    toggle() {
      if (!this.open) {
        this.$refs.sidebarButton.blur();
      }

      this.open = !this.open;
    },

    close() {
      this.open = false;
      this.$refs.sidebarButton.focus();
    },

    body: {
      [':class']() {
        return { 'overflow-y-hidden': this.open };
      },
    },

    sidebarButton: {
      ['@click']() {
        this.toggle();
      },
      [':aria-controls']() {
        return 'sidebar';
      },
    },

    sidebarMenu: {
      ['x-show']() {
        return this.open;
      },
      ['x-transition:enter']() {
        return 'transition linear duration-300';
      },
      ['x-transition:enter-start']() {
        return '-translate-x-64';
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
        return '-translate-x-64';
      },
      [':id']() {
        return 'sidebar';
      },
      [':aria-expanded']() {
        return this.open;
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
