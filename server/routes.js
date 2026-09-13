import { Router } from 'express'
import panelRoutes from '../administration/backend/routes/panelRoutes.js'
import membershipRoutes from '../administration/backend/routes/membershipRoutes.js'

const router = Router()

router.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Administration module routes
router.use('/administration', panelRoutes)
router.use('/administration', membershipRoutes)

export default router
