import {shallowMount} from '@vue/test-utils'
import AddCity from "../../../../views/components/partials/AddCity";

test('AddCity test', () => {

  // render the component
  const wrapper = shallowMount(AddCity)

  // assert the components are rendered

  //Wrapper
  expect(wrapper.find('.field').exists()).toBe(true)
  //id of country
  expect(wrapper.find('.input').exists()).toBe(true)
  //button
  expect(wrapper.find('.button').exists()).toBe(true)

})
