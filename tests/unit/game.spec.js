import { shallowMount } from '@vue/test-utils';
import Game from '@/views/Game.vue';
import Loader from '@/components/shared/Loader'

describe('Game', () => {
  let wrapper;

  beforeAll(() => {
    window.alert = () => {};
    wrapper = shallowMount(Game, {
      propsData: {
        gameName: 'red',
      },
    });
  });

  it('Should show loader if game data is not ready', () => {
    const loader = wrapper.findComponent(Loader);

    expect(loader.isVisible()).toBe(true);
  });

  it('Should show game cover', () => {
    const gameCover = wrapper.find('.game__cover');

    expect(gameCover.exists()).toBe(true);
  });

  it('Should call fetchAllGameData on created', () => {
    const spy = jest.spyOn(Game.methods, 'fetchAllGameData');
    const game = shallowMount(Game, {
      propsData: {
        gameName: 'red',
      },
    });

    expect(spy).toHaveBeenCalled();
  });

  it('Should set game data after fetch', async () => {
    const { fetchAllGameData } = wrapper.vm;
    await fetchAllGameData();

    expect(wrapper.vm.game).not.toBe(null);
  });

  it('Should show game details', () => {
    const gameDetails = wrapper.find('.game__details');

    expect(gameDetails.exists()).toBe(true);
  });

  it('Should not show loader if game data is ready', () => {
    const loader = wrapper.findComponent(Loader);

    expect(loader.exists()).toBe(false);
  });
});
