import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Invalid Request: The provided ID is either missing or incorrect.', {
      errors: err.details,
    });
    next(error);
  }
};