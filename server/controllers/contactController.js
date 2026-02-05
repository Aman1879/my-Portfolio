import nodemailer from 'nodemailer';

export const sendContactEmail = async (req, res) => {
  try {
    console.log('📧 Received form data:', req.body);
    
    const { user_name, user_email, message } = req.body;
    
    if (!user_name || !user_email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Load credentials fresh each time
    const emailUser = process.env.EMAIL_USER || 'amanara13579@gmail.com';
    const emailPassword = (process.env.EMAIL_PASSWORD || '').replace(/\s/g, '');
    const adminEmail = process.env.ADMIN_EMAIL || 'amanara13579@gmail.com';

    console.log('🔐 Using credentials:', {
      user: emailUser,
      passLength: emailPassword.length,
      admin: adminEmail
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword
      }
    });

    // Email options
    const mailOptions = {
      from: emailUser,
      to: adminEmail,
      subject: `New Portfolio Contact Message from ${user_name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Received at: ${new Date().toLocaleString()}
        </p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error.message);

    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'production' ? undefined : error.message
    });
  }
};
