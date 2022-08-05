import express from "express";
import { check, validationResult } from "express-validator";

const router = express.Router();

// @route         GET api/users
// @description   Test route
// @access        Public

router.get("/", (req, res) => res.send("Test users route"));

// @route         GET api/users
// @description   Test route
// @access        Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please use a valid email").isEmail(),
    check(
      "password",
      "The password must contain at least 4 character"
    ).isLength({ min: 4 }),
  ],
  (req, res) => {
    console.log(req.body);
  }
);

export default router;
