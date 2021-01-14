import store from 'store/store'
import { add, remove } from '../pokedexSlice'

const ivysaur = {
  name: 'ivysaur',
  abilities: [
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/'
      }
    }
  ],
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'
      }
    }
  },
  stats: [
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/'
      }
    }
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/'
      }
    }
  ],
  weight: 130,
  order: 2
}

describe('pokedexSlice', () => {
  describe('reducers', () => {
    it('add record to pokedex', () => {
      let state = store.getState().pokedex

      store.dispatch(add(ivysaur))
      state = store.getState().pokedex

      expect(state).toEqual([ivysaur])
    })

    it('remove record to pokedex', () => {
      let state = store.getState().pokedex

      store.dispatch(add(ivysaur))
      state = store.getState().pokedex

      store.dispatch(remove('ivysaur'))
      store.dispatch(remove('ivysaur'))

      state = store.getState().pokedex

      expect(state).toEqual([])
    })
  })
})
