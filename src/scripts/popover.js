export default function popover() {
  return {
    id: Math.random().toString(36).substr(2, 9),
    open: false,

    close() {
      this.open = false;
    },

    toggle() {
      if (this.open) {
        this.active = null;
        this.$nextTick(() => {
          this.$refs.popoverButton.focus();
        });
      }

      this.open = !this.open;
    },

    popover: {
      ['x-trap']() {
        return this.open;
      },
      ['@keydown.escape']() {
        this.close();
      },
      ['@click.outside']() {
        this.close();
      },
    },

    popoverButton: {
      ['@click']() {
        this.toggle();
      },
      [':id']() {
        return `popover-button-${this.id}`;
      },
      [':aria-expanded']() {
        return this.open;
      },
      [':aria-controls']() {
        return `popover-panel-${this.id}`;
      },
    },

    popoverPanel: {
      ['x-show']() {
        return this.open;
      },
      [':id']() {
        return `popover-panel-${this.id}`;
      },
    },
  };
}
