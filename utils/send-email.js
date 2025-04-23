import dayjs from "dayjs";
import { emailTemplates } from "./email-template.js";
import transporter, { accountEmail } from "../config/nodemailer.js";

export const sendReminderEmail = async (to, type, subscription) => {
  if (!to || !type) throw new Error("Missing required parameters: to or type");

  const template = emailTemplates.find((t) => t.label === type);

  if (!template) throw new Error("Invalid email template type");

  const mailInfo = {
    usernName: subscription.user.name,
    subscriptionName: subscription.name,
    renewalDate: dayjs(subscription.renewalDate).format("MMMM D, YYYY"),
    planName: subscription.name,
    price: `${subscription.currency} ${subscription.price} ${subscription.frequency}`,
    paymentMethod: subscription.paymentMethod,
  };

  const message = template.generateBody(mailInfo);
  const subject = template.generateSubject(mailInfo);
  const mailOptions = {
    from: accountEmail,
    to: to,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
