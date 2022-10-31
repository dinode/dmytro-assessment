import axios from 'axios'
import config from '../../config'
import { Dog } from '../entities'
import { IDog } from '../interfaces/IDog'
import { getDogsRepository } from '../database'

export const getNewDog = () => {
  return axios.get(`${config.RANDOM_DOG_URL}`)
}

export const getDogs = () => {
  return getDogsRepository().find()
}

export const addDogs = (dogs: IDog[]) => {
  return getDogsRepository()
    .createQueryBuilder()
    .insert()
    .values(dogs)
    .execute()
}

export const dropOldDogs = () => {
  return getDogsRepository()
    .createQueryBuilder()
    .delete()
    .where(
      (qb) =>
        `id IN (${qb
          .createQueryBuilder()
          .select('id')
          .from(Dog, 'd')
          .orderBy('created', 'ASC')
          .limit(8)
          .getQuery()})`
    )
    .execute()
}
