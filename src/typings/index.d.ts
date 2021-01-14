type Sprites = {
  front_default: string
  other: {
    dream_world: {
      front_default: string
    }
  }
}

type PokemonTypes = {
  type: {
    name: string
  }
}

type PokemonAbilities = {
  ability: {
    name: string
  }
}

type PokemonStats = {
  base_stat: number
  stat: {
    name: string
  }
}

export type Pokemon = {
  name?: string
  order?: integer
  sprites?: Sprites
  types?: PokemonTypes[]
  abilities?: PokemonAbilities[]
  stats?: PokemonStats[]
  weight?: number

  error?: boolean
}

export type PokemonResultItem = {
  name: string
  url: string
}

export type PokemonResults = {
  count: integer
  next?: string
  previous?: string
  results: PokemonResultItem[]
}
