exports.handler = async () => {
  try {
    const response = await fetch('https://miramilanbooks.com/email-c-classroom-activity-hires.jpg', {
      headers: { 'User-Agent': 'MiraMilanBooks-EmailImage/2.0' }
    });

    if (!response.ok) {
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        body: 'Unable to load email image.'
      };
    }

    const bytes = Buffer.from(await response.arrayBuffer());

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
