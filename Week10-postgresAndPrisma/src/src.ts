import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.user.create({
    data: {
        email,
        password,
        firstname,
        lastname
    }
  })
  console.log(res);
}

insertUser("admin2", "Skrish", "Krish", "Sharma")

// console.log("Hello world");