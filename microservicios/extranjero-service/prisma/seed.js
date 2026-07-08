import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const continentes = [
        {
            continente: "america",
            votosSanchez: 61200,
            votosFujimori: 121769,
            actas: 1570
        },
        {
            continente: "europa",
            votosSanchez: 50741,
            votosFujimori: 64067,
            actas: 839
        },
        {
            continente: "asia",
            votosSanchez: 989,
            votosFujimori: 8135,
            actas: 107
        },
        {
            continente: "oceania",
            votosSanchez: 783,
            votosFujimori: 1387,
            actas: 21
        },
        {
            continente: "africa",
            votosSanchez: 20,
            votosFujimori: 30,
            actas: 6
        }
    ];

    for (const c of continentes) {
        await prisma.continentes.upsert({
            where: {
                continente: c.continente,
            },
            update: {},
            create: {
                continente: c.continente,
                votosSanchez: c.votosSanchez,
                votosFujimori: c.votosFujimori,
                actas: c.actas,
            },
        });
    }

    console.log("Seed ejecutado correctamente");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });