const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '1054758114436-0qp59fe453a2cmuu3plhroi0p4rqbjmd.apps.googleusercontent.com', // Client ID
  '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', // Client Secret
  'https://developers.google.com/oauthplayground' // Redirect URL
);

const scopes = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.readonly'
];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting this url:', url);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter the code from that page here: ', (code) => {
  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.error('Error retrieving access token', err);
      return;
    }
    console.log('Access Token:', tokens.access_token);
    console.log('Refresh Token:', tokens.refresh_token);
    readline.close();
  });
});
