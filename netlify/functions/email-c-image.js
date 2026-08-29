exports.handler = async () => {
  try {
    const source = 'https://miramilanbooks.com/email-c-classroom-activity-hires.jpg';
    const response = await fetch(source, { headers: { 'User-Agent': 'MiraMilanBooks-EmailImage/1.0' } });

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
        'Cache-Control': 'public, max-age=31536000, immutable',
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
