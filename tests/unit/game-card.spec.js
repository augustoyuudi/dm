import { shallowMount } from '@vue/test-utils';
import GameCard from '@/components/GameCard.vue';

describe('GameCard', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(GameCard, {
      propsData: {
        game: {
          id: 1,
          name: 'red',
        },
      },
    });
  });

  it('Should show pokemon in title', () => {
    const title = wrapper.find('.game-card__title');

    expect(title.html()).toContain('Pokémon');
  });

  it('Should show game name in title', () => {
    const title = wrapper.find('.game-card__title');

    expect(title.html()).toContain('Red');
  });

  it('Should show #{ID} in subtitle', () => {
    const subtitle = wrapper.find('.game-card__subtitle');

    expect(subtitle.html()).toContain('#1');
  });
});
