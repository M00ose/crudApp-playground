import express from "express";

import {
    createProspect,
    deleteProspect,
    getAllProspects,
    getProspect,
    updateProspect,
} from "../controllers/prospect.controller.js";

const router = express.Router();

router.route("/").get(getAllProspects);
router.route("/:id").get(getProspect);
router.route("/").post(createProspect);
router.route("/:id").patch(updateProspect);
router.route("/:id").delete(deleteProspect);

export default router;