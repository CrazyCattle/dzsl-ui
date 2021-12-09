import { mount } from '@vue/test-utils'
import DzButton from '../src/components/button/button'

test('should test button', async () => {
  const button = mount(DzButton, {
    props: {
      disabled: true,
    },
  })
  button.trigger('click');
  
  expect(button.emitted('click')).toBeFalsy();
})
