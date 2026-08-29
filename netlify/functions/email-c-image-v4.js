const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  try {
    const candidates = [
      path.join(process.cwd(), 'email-c-classroom-activity-hires.jpg'),
      path.join(__dirname, '../../email-c-classroom-activity-hires.jpg'),
      path.join(__dirname, 'email-c-classroom-activity-hires.jpg')
    ];

    const imagePath = candidates.find(p => fs.existsSync(p));
    if (!imagePath) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        body: 'Email image file not found.'
      };
    }

    const bytes = fs.readFileSync(imagePath);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*'
      },
      body: bytes.toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      body: 'Email image service error.'
    };
  }
};
