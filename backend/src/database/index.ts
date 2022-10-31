import 'reflect-metadata'
import path from 'path'
import { DataSource } from 'typeorm'

import { Dog } from '../entities'

import config from '../../config'

export let connection: DataSource

export const initDatabase = async () => {
  try {
    const AppDataSource: DataSource = new DataSource({
      type: 'postgres',
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      entities: [path.resolve(__dirname, '../entities/*.entity{.ts,.js}')],
      synchronize: true,
      logging: false,
    })
    connection = await AppDataSource.initialize()
    connection.synchronize() // ONLY FOR DEV ENV!!!!

    console.log('Data Source has been initialized!')
  } catch (err) {
    console.error('Error during Data Source initialization', err)
  }
}

export const getDogsRepository = () => connection.getRepository(Dog)
