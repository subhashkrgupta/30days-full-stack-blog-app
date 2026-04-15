import {Router} from 'express'
import {  chatWithAi } from '../controllers/chat.Controller.js';


const router =Router();

router.post('/chat',chatWithAi)

export default router