import 'dotenv/config'

function requireEnv(key: string): string {
    const value = process.env[key];
    if (!value) throw new Error(`Missing env variable: ${key}`);
    return value;
}

export const config = {
    PORT: requireEnv("PORT"),
    NODE_ENV: requireEnv("NODE_ENV"),
    DATABASE_URL: requireEnv("DATABASE_URL")
}