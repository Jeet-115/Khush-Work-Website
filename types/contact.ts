export type ContactApiSuccessResponse = {
  success: true;
  message: string;
  clientSubmit?: boolean;
};

export type ContactApiErrorResponse = {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
};

export type ContactApiResponse =
  | ContactApiSuccessResponse
  | ContactApiErrorResponse;
