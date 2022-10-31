import { Request, Response } from 'express'
import { IDog } from '../interfaces/IDog'
import { IDogMedia } from '../interfaces/IDogMedia'
import {
  getNewDog,
  getDogs,
  addDogs,
  dropOldDogs,
} from '../services/dog.service'

export const addNewDogs = async (req: Request, res: Response) => {
  try {
    const dogsMedia: IDogMedia[] = (
      await Promise.all(
        Array(8)
          .fill(0)
          .map(() => getNewDog())
      )
    ).map((dog) => dog.data)
    const dogs: IDog[] = await getDogs()

    if (dogs.length <= 16) {
      await addDogs(
        dogsMedia.map(
          (dogMedia: IDogMedia): IDog => ({
            url: dogMedia.url,
          })
        )
      )

      return res.status(200).send()
    }

    await dropOldDogs()
    await addDogs(
      dogsMedia.map(
        (dogMedia: IDogMedia): IDog => ({
          url: dogMedia.url,
        })
      )
    )

    return res.status(200).send()
  } catch (error) {
    res.status(500).send()
  }
}

export const getAllDogs = async (req: Request, res: Response) => {
  try {
    const dogs: IDog[] = await getDogs()

    return res.status(200).json(dogs)
  } catch (error) {
    res.status(500).send()
  }
}
