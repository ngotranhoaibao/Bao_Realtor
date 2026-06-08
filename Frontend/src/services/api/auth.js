// Minimal auth stub to satisfy imports when auth is not implemented
// The interceptor in `services/api/index.js` expects a `refreshToken` function.
export const refreshToken = async () => {
  // No auth backend available — return a rejected promise so caller can handle it.
  return Promise.reject(new Error("refreshToken not implemented"));
};
