import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  
  const url = 'https://hooks.zapier.com/hooks/catch/810225/28sy0om/';
  const data = {
    body: req.body,
    subject: 'Email from website',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });


    // const contentType = response.headers.get('content-type');
    // let responseData;
    // if (contentType && contentType.includes('application/json')) {
    //   responseData = await response.json();
    // } else {
    //   responseData = await response.text();
    // }

  
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
