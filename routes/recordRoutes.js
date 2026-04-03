const router = require("express").Router();
const ctrl = require("../controllers/recordController");
const { authenticate } = require("../middleware/auth");
const { authorize } = require("../middleware/role");

router.post("/", authenticate, authorize("ADMIN"), ctrl.createRecord);
router.get("/", authenticate, authorize("ADMIN", "ANALYST"), ctrl.getRecords);
router.put("/:id", authenticate, authorize("ADMIN"), ctrl.updateRecord);
router.delete("/:id", authenticate, authorize("ADMIN"), ctrl.deleteRecord);

module.exports = router;
