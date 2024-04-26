import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    GEMINI_API_KEY: get('GEMINI_API_KEY').required().asString(),
}