export class AlreadyExistsError extends Error {
  code = 'ALREADY_EXISTS';
  constructor() {
    super('User already exists');
  }
}
