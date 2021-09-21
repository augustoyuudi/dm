import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import GameCard from '@/components/GameCard.vue';
import ScrollObserver from '@/components/shared/ScrollObserver.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('Home', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(Home, {
      localVue,
      router,
      stubs: {
        RouterLink: true,
        RouterView: true,
      },
    });
  });

  it('Should have games after fetchGames call', async () => {
    const { fetchGames } = wrapper.vm;
    await fetchGames();

    expect(wrapper.vm.games.length).toBeGreaterThan(0);
  });

  it('Should contain ScrollObserver component', () => {
    const scrollObserver = wrapper.findComponent(ScrollObserver);

    expect(scrollObserver.exists()).toBe(true);
  });

  it('Should contain GameCard component', () => {
    const gameCardComponent = wrapper.findComponent(GameCard);

    expect(gameCardComponent.exists()).toBe(true);
  });

  it('Should fetch new games after handleIntersection', async () => {
    const spy = jest.spyOn(Home.methods, 'handleIntersection');
    const home = shallowMount(Home);
    const scroll = home.findComponent(ScrollObserver);
    scroll.vm.$emit('isIntersecting');
    expect(spy).toHaveBeenCalled();
  });

  it('Should redirect to Game details page on card click', async () => {
    const card = wrapper.find('.home__card');
    expect(card.props().to.name).toBe('game');
  });
});
