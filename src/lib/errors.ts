export class APIError extends Error {
  constructor(public message: string, public statusCode: number = 500) {
    super(message);
    this.name = 'APIError';
  }
}

export class ValidationError extends APIError {
  constructor(message: string) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}

export class UsageLimitError extends APIError {
  constructor() {
    super('Usage limit reached', 429);
    this.name = 'UsageLimitError';
  }
}
