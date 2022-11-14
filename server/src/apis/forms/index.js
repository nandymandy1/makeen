import { Router } from "express";
import { requiresAuth } from "../../middlewares/requiresAuth";
import {
  CREATE_FORM,
  DELETE_FORM,
  GET_FORM,
  GET_FORMS,
  UPDATE_FORM,
} from "./actions";

const router = Router();

router.post("/", requiresAuth, CREATE_FORM);

router.put("/:id", requiresAuth, UPDATE_FORM);

router.get("/", requiresAuth, GET_FORMS);

router.get("/:id", requiresAuth, GET_FORM);

router.delete("/:id", requiresAuth, DELETE_FORM);

export default router;
