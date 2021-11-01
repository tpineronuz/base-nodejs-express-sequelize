const sendgridEmail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;
sendgridEmail.setApiKey(SENDGRID_API_KEY);
class SendgridService {
  static sendEmailWithTemplate(
    to,
    template_id,
    dynamic_template_data,
    data_attachments = null,
    cc = null,
    from = 'email@email.com',
  ) {
    const msg = {
      from,
      template_id,
      personalizations: [
        {
          to,
          cc,
          dynamic_template_data: {
            ...dynamic_template_data,
            year: new Date().getFullYear(),
          },
        },
      ],
    };
    if (data_attachments) {
      msg.attachments = [data_attachments];
    }
    return sendgridEmail.send(msg);
  }
}
module.exports = SendgridService;
