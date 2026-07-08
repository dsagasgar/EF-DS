import prisma from './prisma.js';

export const findAll = async () => {
    return await prisma.continentes.findMany();
}
export const findByContinente = async (continente) => {
    return await prisma.continentes.findUnique({
        where: { continente },
    });
}