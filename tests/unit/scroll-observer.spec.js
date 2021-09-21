import { shallowMount } from '@vue/test-utils';
import ScrollObserver from '@/components/shared/ScrollObserver.vue';

describe('ScrollObserver', () => {
  let wrapper;

  beforeAll(() => {
    class MockIntersectionObserver {
      constructor() {
        this.root = null;
        this.rootMargin = '';
        this.thresholds = [];
        this.disconnect = () => null;
        this.observe = () => null;
        this.takeRecords = () => [];
        this.unobserve = () => null;
      }
    }

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver
    });

    Object.defineProperty(global, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver
    });

    wrapper = shallowMount(ScrollObserver);
  });

  it('Should show ScrollObserver div', () => {
    const scroll = wrapper.find('.scroll-observer');

    expect(scroll.isVisible()).toBe(true);
  });
});
