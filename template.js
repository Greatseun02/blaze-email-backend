const template = (name) => {return  `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; width: 100%;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f4f4f4">
                <tr>
                    <td align="center">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="width: 100%;">
                        
                            <!-- Body Content -->
                            <tr>
                                <td style="padding: 20px; font-family: Arial, sans-serif; font-size: 16px; color: #333333;">
                                    <p style="font-weight: 600;">Dear ${name},</p>
                                    <p>We appreciate your interest in our service. You’re now on our waitlist, and we can’t wait to welcome you soon!</p>     
                                    <p>Stay tuned for updates and exclusive early access. If you have any questions, feel free to reach out.</p>
                                    <p>Thank you for being a part of our journey!</p>
                                </td>
                            </tr>

                            <!-- Closing -->
                            <tr>
                                <td style="padding: 20px; font-family: Arial, sans-serif; font-size: 16px; color: #333333; ">
                                    <div style="padding: 20px; background-color:#ffffff!important;">
                                        <img alt="blaze" src="https://res.cloudinary.com/dmz4uohpi/image/upload/v1739879517/blaze-black_bucypx.png" />
                                    </div>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td align="center" style="padding: 10px; font-size: 14px; font-family: Arial, sans-serif; color: #666666; border-top: 1px solid #dddddd;">
                                    &copy; 2025 Blaze Tech LLC
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>
`}

module.exports = template;