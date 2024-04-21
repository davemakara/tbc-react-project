export function getBaseUrl() {
  console.log(process.env);
  console.log(process.env.VERCEL_ENV);
  return process.env.VERCEL_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
}
