import { google } from 'googleapis';

import { env } from '@/env';

const credentials = Buffer.from(env.GCP_SERVICE_ACCOUNT_CREDENTIALS_JSON, 'base64').toString(
  'utf-8'
);

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(credentials),
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function getSpreadsheetData(spreadsheetId: string, range: string) {
  return new Promise<string[][] | null | undefined>((resolve, reject) => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: spreadsheetId,
        range: range,
      },
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res?.data.values);
        }
      }
    );
  });
}
