import { ServiceAccount } from 'firebase-admin/lib/app';

export const SERVICE_ACCOUNT = {
  projectId: process.env.PROJECT_ID,
  privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.CLIENT_EMAIL,
} as ServiceAccount;

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
