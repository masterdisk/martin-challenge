import {shallowMount} from '@vue/test-utils'
import Home from "../../../views/components/Home";

test('Home test', () => {

  // render the component
  const wrapper = shallowMount(Home)

  // assert the components are rendered

  //wrapper
  expect(wrapper.find('.container').exists()).toBe(true)
  //title
  expect(wrapper.find('.title').exists()).toBe(true)


})
