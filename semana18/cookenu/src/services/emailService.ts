import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmailResetPassword = async (
  email: string[],
  password: string
): Promise<void> => {
  await transport.sendMail({
    from: "contact@cookenu.com",
    to: email,
    subject: "Reset Password",
    text: `This is your new password: ${password}`,
  });
};
