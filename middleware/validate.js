const { validationResult } = require("express-validator");

module.exports = (validations) => {
  return async (req, res, next) => {
    // sequential processing, stops running validations chain if one fails.
    // for (const validation of validations) {
    //     const result = await validation.run(req);
    //     if (!result.isEmpty()) {
    //         return res.status(400).json({ errors: result.array() });
    //     }
    // }
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: errors.array() });
  };
};
