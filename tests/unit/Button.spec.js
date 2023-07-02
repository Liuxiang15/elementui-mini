import Button from '@element/button';
import { shallowMount } from '@vue/test-utils';
// shallowMount 和 mount 一样，创建一个包含被挂载和渲染的 Vue 组件的 Wrapper，不同的是被存根的子组件。


describe('Button.vue', () => {
  let wrapper;
  let buttonEle;
  beforeEach(() => {
    wrapper = shallowMount(Button);
    buttonEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(buttonEle.classList).toContain('el-button');
  });

  it('size', () => {
    // setProps:设置 Wrapper vm 的 prop 并强制更新。
    wrapper.setProps({
      size: 'mini',
    });
    expect(buttonEle.classList).toContain(
      'el-button--mini',
    );
  });

  it('type', () => {
    wrapper.setProps({
      type: 'danger',
    });
    expect(buttonEle.classList).toContain('el-button--danger');
  });

  it('plain', () => {
    wrapper.setProps({
      plain: true,
    });
    expect(buttonEle.classList).toContain('is-plain');
  });

  it('round', () => {
    wrapper.setProps({
      round: true,
    });
    expect(buttonEle.classList).toContain('is-round');
  });

  it('circle', () => {
    wrapper.setProps({
      circle: true,
    });
    expect(buttonEle.classList).toContain('is-circle');
  });

  it('disabled', () => {
    wrapper.setProps({
      disabled: true,
    });
    expect(buttonEle.classList).toContain('is-disabled');
  });

  it('loading', () => {
    wrapper.setProps({
      loading: true,
    });
    // html:返回 Wrapper DOM 节点的 HTML 字符串。
    expect(wrapper.html()).toContain(
      '<i class="el-icon-loading"></i>',
    );
  });

  it('icon', () => {
    wrapper.setProps({
      icon: 'el-icon-edit',
    });
    expect(wrapper.html()).toContain('<i class="el-icon-edit"></i>');
  });

  it('autofucus', () => {
    wrapper.setProps({
      autofocus: true,
    });
    //   toEqual：方法用于比较两个变量的值是否相等。它使用 JavaScript 的 == 操作符来执行比较操作。
    //   expect(wrapper.attributes('autofocus')).toEqual('autofocus');
    //  attributes:返回 Wrapper DOM 节点的特性对象。如果提供了 key，则返回这个 key 对应的值。
    //   toBe： 方法用于比较两个变量的值和类型是否相等，它使用 JavaScript 的 === 操作符来执行比较操作
    expect(wrapper.attributes('autofocus')).toBe(
      'autofocus',
    );
  });

  it('native-type', () => {
    wrapper.setProps({
      nativeType: 'submit',
    });
    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('click', () => {
    // trigger:在该 Wrapper DOM 节点上异步触发一个事件。
    wrapper.trigger('click');
    // console.log('wrapper.emitted()', wrapper.emitted());
    //  toBeTruthy： Use .toBeTruthy when you don't care what a value is and you want to ensure a value is true in a boolean context.
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
