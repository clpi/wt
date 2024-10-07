import { PrismaClient, User } from "@prisma/client";
import { withPulse } from "@prisma/extension-pulse"

const prisma = new PrismaClient();
  // withPulse({
  //   // apiKey: process.env.PULSE_API_KEY,
  //   apiKey: 
  // })
// )

const main: Promise<User> | any = async () => {
  const u = await prisma.user.create({
    data: {
      created: new Date(),
      phone: "1234567890",
      name: "Chris",
      email: "clp@clp.is",
      // posts: {
      //   create: {
      //     slug: "hello-world",
      //     title: "Hello World",
      //     content: "This is a test post",
      //   },
      // },
    },
  });
  return u;
};

main();
// const p = new PrismaClient();

// p.user.create({
// name: "Chris",
// email: "chris@clp.is",
// posts: [],
// })
console.log(main);
