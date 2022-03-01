import {shallowMount} from '@vue/test-utils'
import NavBar from "../../../../views/components/partials/NavBar";

test('NavBar test', () => {

  // render the component
  const wrapper = shallowMount(NavBar)

  // assert the components are rendered

  //Navbar
  expect(wrapper.find('.navbar').exists()).toBe(true)
  //nav-bar items
  expect(wrapper.find('.navbar-item').exists()).toBe(true)

})
