export type WorkOsResponse = {
  id: string;
  email_verification_token?: string;
  response: {
    message: Array<{
      message: string;
      code: string;
      minimum_length?: number;
      character_type?: string;
      symbols?: string;
      warning?: string;
      suggestions?: string[];
    }>;
    error: string;
    statusCode: number;
  };
  status: number | string;
  options: Record<string, unknown>;
  message: string;
  name: string;
};
