export const ApiRes = (
  error: string | null,
  data?: any
): { error: string | null; data: any } => {
  if (error) {
    return { error, data: null };
  }
  return { error: null, data };
};
