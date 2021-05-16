
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Meals from '@/views/Meals.vue'

describe('App component', () => {
  it('renders the app component', () => {
    const wrapper = mount(App)
    expect(wrapper.contains('#app')).toBe(true)
  })
})
describe('Meal  component', () => {
  it('renders the meal component', () => {
    const wrapper = mount(Meals)
    expect(wrapper.contains('.page__carbonara')).toBe(true)
  })
})
