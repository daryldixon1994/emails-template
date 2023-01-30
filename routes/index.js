const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");

//adminEmailUserNotAMember
router.post("/admin-send", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: "example@email.com",
        pass: "xxxxxxxxxxxxxxxxxxxxxxx",
      },
    });
    transporter.verify((error, success) => {
      if (error) console.error(error);
      console.log("Server is ready to take our messages");
    });

    const filePath = path.resolve("templates", "adminEmailNotAMember.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      fullName: "Doe John",
      email: "User@gmail.com",
      phone: "+41 12 34 56 78",
      savedDate: "Wednesday, 08.02",
      savedHour: " Afternoon, 13.40-16.20",
      needs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum, reprehenderit quae quod ducimus neque. Officiis aliquam,
            voluptate adipisci deserunt voluptas minima rerum veritatis modi
            suscipit repellendus neque corrupti ipsa dolores cumque voluptatem
            nostrum enim exercitationem pariatur voluptatum! Laboriosam,
            deleniti. Delectus eum minus earum commodi distinctio praesentium
            odit sapiente ad?`,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: "dynaskills <example@email.com>",
        to: "youremail@test.com",
        subject: "dynaskills® |  Reservation at Workshop ",
        html: htmlToSend,
      },
      (err, info) => {
        if (err) {
          console.log(err);
          res.status(400).json({ error: err });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "email sent" });
        }
      }
    );
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
});
//adminEmailUserAngstAMember
router.post("/admin-send-member", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: "example@email.com",
        pass: "xxxxxxxxxxxxxxxxxxxxxxx",
      },
    });
    transporter.verify((error, success) => {
      if (error) console.error(error);
      console.log("Server is ready to take our messages");
    });

    const filePath = path.resolve("templates", "adminEmailAngstMember.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      fullName: "Doe John",
      email: "User@gmail.com",
      phone: "+41 12 34 56 78",
      savedDate: "Wednesday, 08.02",
      savedHour: " Afternoon, 13.40-16.20",
      needs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum, reprehenderit quae quod ducimus neque. Officiis aliquam,
            voluptate adipisci deserunt voluptas minima rerum veritatis modi
            suscipit repellendus neque corrupti ipsa dolores cumque voluptatem
            nostrum enim exercitationem pariatur voluptatum! Laboriosam,
            deleniti. Delectus eum minus earum commodi distinctio praesentium
            odit sapiente ad?`,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: "dynaskills <example@email.com>",
        to: "youremail@test.com",
        subject:
          "dynaskills® |  Reservation at Workshop - Angestellte Scweiz member ",
        html: htmlToSend,
      },
      (err, info) => {
        if (err) {
          console.log(err);
          res.status(400).json({ error: err });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "email sent" });
        }
      }
    );
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
});
//adminPremiumNewUser
router.post("/admin-send-new-user", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: "example@email.com",
        pass: "xxxxxxxxxxxxxxxxxxxxxxx",
      },
    });
    transporter.verify((error, success) => {
      if (error) console.error(error);
      console.log("Server is ready to take our messages");
    });

    const filePath = path.resolve("templates", "adminPremiumNewUser.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      newUserName: "New user name",
      newUserEmail: "User@gmail.com",
      paymentStatus: "Sucess",
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: "dynaskills <example@email.com>",
        to: "youremail@test.com",
        subject: "dynaskills® Premium | New User ",
        html: htmlToSend,
      },
      (err, info) => {
        if (err) {
          console.log(err);
          res.status(400).json({ error: err });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "email sent" });
        }
      }
    );
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
});
//userEmailNotAMember
router.post("/user-send-not-member", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: "example@email.com",
        pass: "xxxxxxxxxxxxxxxxxxxxxxx",
      },
    });
    transporter.verify((error, success) => {
      if (error) console.error(error);
      console.log("Server is ready to take our messages");
    });

    const filePath = path.resolve("templates", "userEmailNotAMember.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      fullName: "John Doe",
      email: "User@gmail.com",
      phone: "+41 12 34 56 78",
      address: "Martin super Street 1",
      postalCode: "2000",
      city: "Zurich",
      country: "Switzerland",
      savedDate: "Wednesday, 08.02",
      savedHour: "Afternoon, 13.40-16.20",
      needs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum, reprehenderit quae quod ducimus neque. Officiis aliquam,
            voluptate adipisci deserunt voluptas minima rerum veritatis modi
            suscipit repellendus neque corrupti ipsa dolores cumque voluptatem
            nostrum enim exercitationem pariatur voluptatum! Laboriosam,
            deleniti. Delectus eum minus earum commodi distinctio praesentium
            odit sapiente ad? `,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: "dynaskills <example@dynaskills.com",
        to: "youremail@test.com",
        subject: "dynaskills® ",
        html: htmlToSend,
      },
      (err, info) => {
        if (err) {
          console.log(err);
          res.status(400).json({ error: err });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "email sent" });
        }
      }
    );
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
});

//userEmailAngstMember
router.post("/user-send-angst-member", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: "service.gmc.blogs@outlook.com",
        pass: "xxxxxxxxxxxxxxxxxxxxxxx",
      },
    });
    transporter.verify((error, success) => {
      if (error) console.error(error);
      console.log("Server is ready to take our messages");
    });

    const filePath = path.resolve("templates", "userEmailAngstMember.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      fullName: "John Doe",
      email: "User@gmail.com",
      phone: "+41 12 34 56 78",
      savedDate: "Wednesday, 08.02",
      savedHour: "Afternoon, 13.40-16.20",
      needs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laborum, reprehenderit quae quod ducimus neque. Officiis aliquam,
            voluptate adipisci deserunt voluptas minima rerum veritatis modi
            suscipit repellendus neque corrupti ipsa dolores cumque voluptatem
            nostrum enim exercitationem pariatur voluptatum! Laboriosam,
            deleniti. Delectus eum minus earum commodi distinctio praesentium
            odit sapiente ad? `,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: "dynaskills <example@dynaskills.com",
        to: "youremail@test.com",
        subject: "dynaskills® ",
        html: htmlToSend,
      },
      (err, info) => {
        if (err) {
          console.log(err);
          res.status(400).json({ error: err });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "email sent" });
        }
      }
    );
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
});
//userPremiumNewUser
router.post("/user-send-new-premium", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: "service.gmc.blogs@outlook.com",
        pass: "xxxxxxxxxxxxxxxxxxxxxxx",
      },
    });
    transporter.verify((error, success) => {
      if (error) console.error(error);
      console.log("Server is ready to take our messages");
    });

    const filePath = path.resolve("templates", "userPremiumNewUser.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      fullName: "John Doe",
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: "dynaskills <example@dynaskills.com",
        to: "youremail@test.com",
        subject: "Welcome at dynaskills® Premium ",
        html: htmlToSend,
      },
      (err, info) => {
        if (err) {
          console.log(err);
          res.status(400).json({ error: err });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "email sent" });
        }
      }
    );
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
});

module.exports = router;
