import express from 'express';

import {
    createProspect, deleteProspect, getAllProspects, getProspect, updateProspect
} from '../controllers/prospect.controller.js';

const router = express.Router();

router.post('/').get(getAllProspects);
router.post('/:id').get(getProspect);
router.post('/').post(createProspect);
router.post('/:id').patch(updateProspect);
router.post('/:id').delete(deleteProspect);

export default router;