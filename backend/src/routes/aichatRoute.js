import {express,Router} from 'express'


const router =Router();

router.post('/chat',chatController)

export default router