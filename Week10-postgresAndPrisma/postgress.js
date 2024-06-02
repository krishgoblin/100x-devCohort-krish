const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://skrish7373:2qx9MBjPDLIf@ep-bitter-dust-a1nqexdj.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
});

async function connect() {
  await client.connect();

  //     const result = await client.query(`
  //     CREATE TABLE users (
  //         id SERIAL PRIMARY KEY,
  //         username VARCHAR(50) UNIQUE NOT NULL,
  //         email VARCHAR(255) UNIQUE NOT NULL,
  //         password VARCHAR(255) NOT NULL,
  //         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  //     );
  //   `);
  const date = new Date();

  // Insert data into the table using parameterized query
  const result = await client.query(
    `
    INSERT INTO users (id, username, email, password, created_at) 
    VALUES ($1, $2, $3, $4, $5);
    `,
    [1, "krish", "something@gmail.com", "Skrish7373", date]
  );
  console.log(result);
  await client.end();
}

connect(); 
