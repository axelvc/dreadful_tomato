import data from './data.json'

export default async function getPrograms(type) {
  return data.entries
    .filter((v) => v.programType === type)
    .map((v, i) => ({
      id: i + 1,
      title: v.title,
      description: v.description,
      date: v.releaseYear,
      link: `/${type}/${v.title}`,
      img: v.images['Poster Art'].url,
    }))
}
