import { ErrorsResponse } from "../interfaces/ErrorsResponse";

export function getErrorResponse (error: any) {
  const err: ErrorsResponse = { status_code: 404, status_message: 'Not Found !' };
  if(error && error.status_code && error.status_message) {
    err.status_code = error.status_code;
    err.status_message = error.status_message;
  }
  return err;
}