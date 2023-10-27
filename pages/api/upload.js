// pages/api/upload.js

import { Storage } from '@google-cloud/storage';
import formidable from 'formidable';
import fs from 'fs';

const storage = new Storage({
    credentials: {
        client_email: "pratik@gis-web-app-403206.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDUWrSCXpAUmqgr\n0hg6oFBQdWHbrGhKttzOrEuAmfQFR0pwcdjjEHYcXf1La9rXZR2GDknsfgDCP7lD\n0Hwchqs+fqX4nE0SOTW/ixxYDnUc39rk5pzncJuyBF9PRS2q+Gn2N52x3R9q1T7P\nqskJf4P6HFhfK9+TOWgFXAqkdRicECMisxbh0buYexSCTh7biMP4O7SSMwqVYxQN\nrtnCABVTcUbrWLOWci8WI4xm+FZdFg/GUGHnWU6C6L1ndlkmja6lE609l1nBXg33\nFglgG0LvEVE3v+kPKD/aLd/AyiVpfoiKFdYyfwp85PfuxOHMkjSgqQgOetQ2amMU\nZFiqL0klAgMBAAECggEAJFehrO4iGmSdg2JhYycsl5h/Nuk6sA67m2NBSLEQYhbh\nVn0lcTbP/+rV/qJmwZY8h0TKwf6OgrAFNOXpV7h0di2WmgWl6wh/eliEcU2IHXjy\nLVqKX9GV09GLvjVIq4n4GHtMMbR2PAJizYedAFMicxuGxELt8HRSqRgneh3QKGUK\nrBySqkfwrLQbaytd6BGvAHvguCkxWVREuogG2GQC+KZpXIhz8fsJfOUNC99ebirf\nTOymLAqFuBU5GzO6tgpBbPyVQGAwgBzrCsyrduKgvgiHNUuNprgg98Xfzt9cW5U5\ncBgpwkkMYJx0uok7XOCpCnEu5ijCJCOL0jCKikgrwQKBgQD3XSoBZBmj9XW+DdfJ\naycWFAh1lQ30H/tm+/lxCSFsMLtDER+g5djk/MYd83Zyh56D2iOe/WQsNOytbJxx\nxEoOaX/uOD8qLXFTDEwfE9FQORPZQkIDyY1NbhoLp3la7HPun4BWGl+Bl40qqekg\nSV3SM4j7JqJUNmSCRHMBmV01AwKBgQDbxKPFW4Oepu3Hrl98EivVpd5+cK9HVjxD\nMNL1T8/LLLjkA3LDNHTfpaHcWmQS//twWuuvubx9LZkRblMDR9tgKKHwBq5Z7uqm\nSksM6QABTbLZg9qWVqMrwnjQVq/Zk6WxiE+GEGPbNXvVgkHgDJuZUSMfumMVb0bi\nJGKf23DMtwKBgQC3RUNV/IAyxi4SPdde2BEBfp4139WSxg9R4eaSJR2qNwDHU+yH\nHURxhAaVMkjT2j9LmVdC+KI7Tor8grf2YmQsAWZTbUD/UuPfkADmFZzDP0bBdSHM\nBIy4jZamg9KZ1w6eAXboVGnmbg6dSX37+d+VWbFnwtwKYLJfAa/jw2kXWQKBgCMM\nlWHgWnlu/fUepjPPYhZMwdNAfXPPGQVOQBbHh8hLdaFHu4HOV+VjMRFHiTZOhPdC\nSNxZrun337Wb9rlLOH15fXoeVqgZJmsm5hlE/681iRSPpsjbQGK2PTZc3ObCWWaa\n6rPi4UoQmZNPltn4qMgm3Icu3qaIfLGMQ/5irPa5AoGAK6zh22cMVBCmtwfPPY9N\ndQQQhbmB79I8CdfO6ju+kSl/Oyk2rc/UTHyiNZRwpQIZ5OmHvXqJ6V1TIZIf7Kfv\nVmdA4JeVZkW46cAkjw6a9HZijENwmdq1gYPMsnZpohIc4LnZCHmEtN0WXW5+7f/J\nETVhDEo43u7ZAAkNpwkSaLc=\n-----END PRIVATE KEY-----\n",
      },
//   keyFilename: 'gis-web-app-403206-2f2bdd27b913.json',
  projectId: 'gis-web-app-403206'  ,
});

const bucketName = 'data-storage-geoapp';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = formidable({});

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      // Upload the file to Google Cloud Storage
      console.log(fields)
      console.log(files)
      const file = files.file[0];
      console.log(fields)
      console.log(files)
      const options = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { 'x-goog-meta-test': 'data' },
      };
      console.log(file.originalFilename)
      const folderPath = fields.folder[0]
      const fullfilepath = `${folderPath}/${file.originalFilename}`;
      const blob = storage.bucket(bucketName).file(fullfilepath);
      fs.createReadStream(file.filepath)
        .pipe(blob.createWriteStream())
        .on('error', (error) => {
          console.error(error);
          return res.status(500).json({ error: 'File upload failed' });
        })
        .on('finish', () => {
          return res.status(200).json({ message: 'File uploaded successfully' });
        });
    });
  } else {
    res.status(405).end();
  }
};
