export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (!this.gutter) {
        return style;
      }
      style.paddingRight = `${this.gutter / 2}px`;
      style.paddingLeft = style.paddingRight;
      return style;
    },
    classList() {
      const classList = [];
      const propList = ['span', 'offset', 'push', 'pull'];
      propList.forEach((prop) => {
        if (!this[prop]) return;
        const className = prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`;
        classList.push(className);
      });
      const sizeList = ['xs', 'sm', 'md', 'lg', 'xl'];
      sizeList.forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          //  参数为对象类型实例
          // {
          //   span: 6,
          //   offset: 8,
          //   push: 7,
          //   pull: 9
          // }
          // el-col-xs-6
          // el-col-xs-offset-8
          // el-col-xs-push-7
          // el-col-xs-pull-9
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            const className = prop === 'span' ? `el-col-${size}-${props[prop]}`
              : `el-col-${size}-${prop}-${props[prop]}`;
            classList.push(className);
          });
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-col', this.classList],
      style: this.style,
    }, this.$slots.default);
  },
};
