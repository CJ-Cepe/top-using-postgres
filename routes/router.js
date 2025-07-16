import Router from "express.Router";
import * as controller from "../controllers/controller";
const router = Router();

router.get("/{index}", controller.displayContent);
router.get("/new", controller.getNewForm);
router.post("/new", controller.postNewForm);

export default router;
