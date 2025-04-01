import { apiResponseDto } from '../dto/apiResponse.js';
export const validateDto = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json(apiResponseDto({code: 400, message: error.details[0].message }));
    next();
  };