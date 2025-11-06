import nodemailer from 'nodemailer'

let transporter = null
let fromEmail = process.env.FROM_EMAIL || 'no-reply@example.com'

export async function createTransporter() {
  if (transporter) return transporter

  if (process.env.USE_ETHEREAL === 'true') {
    const testAccount = await nodemailer.createTestAccount()
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    })
    fromEmail = `AngloBoost Test <${testAccount.user}>`
    return transporter
  }

  if (!process.env.SMTP_HOST) {
    // Fallback: console transport
    transporter = {
      sendMail: async (opts) => {
        // eslint-disable-next-line no-console
        console.log('[MAIL Fallback] To:', opts.to)
        // eslint-disable-next-line no-console
        console.log('[MAIL Fallback] Subject:', opts.subject)
        // eslint-disable-next-line no-console
        console.log('[MAIL Fallback] Text:', opts.text)
        // eslint-disable-next-line no-console
        console.log('[MAIL Fallback] HTML:', opts.html)
        return { messageId: 'console-transport' }
      }
    }
    return transporter
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
  return transporter
}

export async function sendResetEmail(to, resetLink) {
  const tx = await createTransporter()
  const info = await tx.sendMail({
    from: fromEmail,
    to,
    subject: 'Reset hasła - AngloBoost',
    text: `Aby zresetować hasło, otwórz link: ${resetLink}`,
    html: `
      <p>Otrzymaliśmy prośbę o reset hasła.</p>
      <p>Aby ustawić nowe hasło, kliknij link:</p>
      <p><a href="${resetLink}">${resetLink}</a></p>
      <p>Jeśli to nie Ty, zignoruj tę wiadomość.</p>
    `
  })

  // If Ethereal, provide preview URL in logs
  if (nodemailer.getTestMessageUrl && info && info.messageId) {
    const url = nodemailer.getTestMessageUrl(info)
    if (url) {
      // eslint-disable-next-line no-console
      console.log('E-mail podgląd (Ethereal):', url)
    }
  }
}

export async function sendNewsletterWelcome(email) {
    const tx = await createTransporter()

    const subject = 'Witamy w newsletterze AngloBoost! 🎉'
    const text = `Dziękujemy za zapis do newslettera AngloBoost! Będziemy informować Cię o nowych materiałach, ćwiczeniach i funkcjach platformy.`

    const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #012169;">Witamy w społeczności AngloBoost! 🎉</h2>
      
      <p>Dziękujemy za zapis do naszego newslettera. Jesteśmy podekscytowani, że dołączasz do grona osób uczących się angielskiego z nami!</p>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #012169; margin-top: 0;">Co otrzymasz w newsletterze:</h3>
        <ul>
          <li>📚 Nowe materiały i ćwiczenia</li>
          <li>💡 Wskazówki do efektywnej nauki</li>
          <li>🎯 Informacje o nowych funkcjach platformy</li>
          <li>📢 Aktualności ze społeczności</li>
        </ul>
      </div>
      
      <p><strong>Zero spamu, tylko wartościowe treści!</strong></p>
      
      <p>Jeśli chcesz zrezygnować z subskrypcji, w każdej wiadomości znajdziesz link do wypisania się.</p>
      
      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
      
      <p style="color: #666; font-size: 14px;">
        Pozdrawiamy,<br>
        <strong>Zespół AngloBoost</strong>
      </p>
    </div>
  `

    const info = await tx.sendMail({
        from: fromEmail,
        to: email,
        subject,
        text,
        html
    })

    // If Ethereal, provide preview URL in logs
    if (nodemailer.getTestMessageUrl && info && info.messageId) {
        const url = nodemailer.getTestMessageUrl(info)
        if (url) {
            console.log('Newsletter welcome email preview:', url)
        }
    }

    return info
}
