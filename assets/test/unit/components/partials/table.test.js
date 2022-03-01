import {shallowMount} from '@vue/test-utils'
import Table from "../../../../views/components/partials/Table";

test('Table test', () => {

  // render the component
  const wrapper = shallowMount(Table)

  // assert the components are rendered

  //table
  expect(wrapper.find('.table').exists()).toBe(true)
  //id of country
  expect(wrapper.find('.id_country').exists()).toBe(true)
  //name of country
  expect(wrapper.find('.name_country').exists()).toBe(true)
  //city visited > 3 (favourite row)
  expect(wrapper.find('.favourite-city').exists()).toBe(true)
  //city visited > 3 (non-favourite row)
  expect(wrapper.find('.not-favourite-cit').exists()).toBe(true)


})
