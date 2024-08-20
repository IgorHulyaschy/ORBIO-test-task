export class InvalidInputDataError extends Error {
  code = 'INVALID_INPUT_DATA';
  constructor() {
    super('There is no such user or offer');
  }
}
