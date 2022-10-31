import { Router } from 'express'
import { addNewDogs, getAllDogs } from '../controllers/dog.controller'

const router = Router()

router.put('/dogs', addNewDogs)
router.get('/dogs', getAllDogs)

export default router
