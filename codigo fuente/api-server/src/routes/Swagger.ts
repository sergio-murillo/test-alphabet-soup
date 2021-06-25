/**
 * Se definen las rutas para swagger
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import { Router } from 'express';

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../config/swagger');

const router = Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDoc));

export default router;
