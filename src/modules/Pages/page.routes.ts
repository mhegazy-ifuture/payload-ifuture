import { Router } from "express";
import * as pageController from './page.controller'
const router = Router()

router.get('/' , pageController.getAllPages)
export default router