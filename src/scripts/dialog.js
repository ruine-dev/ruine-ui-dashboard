export default function dialog() {
  return {
    id: Math.random().toString(36).substr(2, 9),

    dialog: {
      [':role']() {
        return 'dialog';
      },
      [':aria-modal']() {
        return true;
      },
      [':aria-labelledby']() {
        return `dialog-title-${this.id}`;
      }
    },

    dialogTitle: {
      [':id']() {
        return `dialog-title-${this.id}`;
      },
    }
  }
}