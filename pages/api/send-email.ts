import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  
  const { body, subject } = req.body;
  const { name, email, phone, country, companyName, position, message } = body;

  // Your Zapier webhook URL
  const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/810225/28sy0om/';

  // HTML email template
  const emailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Interest Received - DT-Systems</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #F9F4F0;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 0;">
                    <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        <!-- Header -->
                        <tr>
                            <td style="background-color: #03012C; padding: 20px; text-align: center;">
                                <img src="https://dt-systems.com/logo.png" alt="DT-Systems Logo" style="max-width: 200px; height: auto;">
                            </td>
                        </tr>
                        
                        <!-- Main Content -->
                        <tr>
                            <td style="padding: 30px;">
                                <h1 style="color: #03012C; margin-bottom: 20px;">New Interest Received!</h1>
                                <p style="color: #3B6064; margin-bottom: 15px;">Hello Admin,</p>
                                <p style="color: #3B6064; margin-bottom: 15px;">Great news! A potential user has shown interest in DT-Systems. Here are the details:</p>
                                <ul style="color: #3B6064; margin-bottom: 20px;">
                                    <li><strong>Name:</strong> ${name}</li>
                                    <li><strong>Email:</strong> ${email}</li>
                                    <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
                                    <li><strong>Country:</strong> ${country}</li>
                                    <li><strong>Company:</strong> ${companyName}</li>
                                    <li><strong>Position:</strong> ${position}</li>
                                    <li><strong>Message:</strong> ${message || 'Not provided'}</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `;

  try {
    console.log(emailTemplate);
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        subject,
        body: emailTemplate
      }),
    });



    if (!response.ok) {
      throw new Error('Failed to send to Zapier');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
}
