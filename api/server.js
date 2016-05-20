/**
 * Mocking client-server processing
 */

const _countries = [
  {
    id: 0,
    name: 'Belgium',
    intro: 'Belgium, officially the Kingdom of Belgium, is a federal state in Western Europe. It is a founding member of the European Union.'
  },
  {
    id: 1,
    name: 'Netherlands',
    intro: 'The Netherlands is a country that is part of (a constituent country) of the Kingdom of the Netherlands. Most of it is in Western Europe, but there are also some parts in the Caribbean.'
  },
  {
    id: 2,
    name: 'France',
    intro: 'France, officially the French Republic, is a country in Western Europe. Its capital city is Paris. It is a member of the European Union.'
  },
  {
    id: 3,
    name: 'Germany',
    intro: 'The Republic of Germany, also called Germany, is a country in Central Europe. The country\'s full name is sometimes shortened to the FRG.'
  },
  {
    id: 4,
    name: 'Spain',
    intro: 'Spain is a country in Southern Europe. It is in the Iberian Peninsula near Portugal and Gibraltar. France and the country of Andorra are on its northeast side, where the Pyrenees mountains are.'
  }
]

const _attractions = [
  {
    id: 0,
    countryId: 0,
    name: 'Manneke Pis',
    detail: ''
  },
  {
    id: 1,
    countryId: 0,
    name: 'Manneke Pis',
    detail: ''
  },
  {
    id: 2,
    countryId: 0,
    name: 'Manneke Pis',
    detail: ''
  },
  {
    id: 3,
    countryId: 1,
    name: 'Manneke Pis',
    detail: ''
  }
]

export default {
  getCountries (cb) {
    setTimeout(() => cb(_countries), 100)
  },
  getAttractionsFromCountry (cb, countryId) {
    setTimeout(() => cb(_attractions.filter(attraction => attraction.countryId === countryId)), 100)
  }
}
