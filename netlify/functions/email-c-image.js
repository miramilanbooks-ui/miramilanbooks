const p1 = require('./email-c-image-part1');
const p2 = require('./email-c-image-part2');
const p3 = require('./email-c-image-part3');
const p4 = require('./email-c-image-part4');
const p5 = require('./email-c-image-part5');

exports.handler = async () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'image/jpeg',
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Access-Control-Allow-Origin': '*'
  },
  body: p1 + p2 + p3 + p4 + p5,
  isBase64Encoded: true
});
