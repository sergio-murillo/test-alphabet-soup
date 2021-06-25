/**
 * Se definen las rutas para los servicios API
 *
 * @author Sergio Murillo <ingsergiomurillocol@gmail.com>
 */

import { Router } from 'express';

import AlphabetController from '../controllers/Alphabet';
import AlphabetValidator from '../validators/Alphabet';

const router = Router();

router.post('/alphabet/validate', AlphabetValidator.validate(), AlphabetController.perform);

export default router;
