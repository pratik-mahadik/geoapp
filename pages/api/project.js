// pages/api/project.js

import { PrismaClient } from '../../prisma/client';

export default async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.project.findMany();
    console.log(data)
    const dataWithNumberIds = data.map((row) => {
        return {
          ...row,
          id: Number(row.id),
        };
      });
    res.status(200).json({ data: dataWithNumberIds });
  } 
  catch (error) {
    res.status(500).json({ error: error });
  } 
  finally {
    await prisma.$disconnect();
  }
};
