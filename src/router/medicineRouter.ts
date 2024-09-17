import { Router } from "express";
import { createMedicine, deletMedicine, readMedicine, updateMedicine } from "../controller/medicineController";
import { createValidation, updateValidation } from "../middleware/medicineValidation";

const router = Router()

/** router for add new medicine */
router.post(`/`, [createValidation], createMedicine)

/** route for show all medicine */
router.get(`/`, readMedicine)

router.put(`/:id`,[updateValidation], updateMedicine)

router.delete(`/:id`,deletMedicine )

export default router