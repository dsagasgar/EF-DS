import prisma from './prisma.js';

export const findAll = async () => {
    return await prisma.regiones.findMany();
}
export const findByRegion = async (region) => {
    return await prisma.regiones.findUnique({
        where: { region },
    });
}