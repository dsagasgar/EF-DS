import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const regiones = [
        {
            region: "amazonas",
            votosSanchez: 125555,
            votosFujimori: 69220,
            actas: 1278
        },
        {
            region: "ancash",
            votosSanchez: 353564,
            votosFujimori: 270818,
            actas: 3472
        },
        {
            region: "apurimac",
            votosSanchez: 198342,
            votosFujimori: 81425,
            actas: 1841
        },
        {
            region: "arequipa",
            votosSanchez: 384927,
            votosFujimori: 421186,
            actas: 4623
        },
        {
            region: "ayacucho",
            votosSanchez: 214586,
            votosFujimori: 79243,
            actas: 1928
        },
        {
            region: "cajamarca",
            votosSanchez: 451389,
            votosFujimori: 198742,
            actas: 3654
        },
        {
            region: "callao",
            votosSanchez: 192574,
            votosFujimori: 286431,
            actas: 1528
        },
        {
            region: "cusco",
            votosSanchez: 438912,
            votosFujimori: 176804,
            actas: 3421
        },
        {
            region: "huancavelica",
            votosSanchez: 182645,
            votosFujimori: 61433,
            actas: 1417
        },
        {
            region: "huanuco",
            votosSanchez: 241357,
            votosFujimori: 143580,
            actas: 2298
        },
        {
            region: "ica",
            votosSanchez: 187462,
            votosFujimori: 302681,
            actas: 2714
        },
        {
            region: "junin",
            votosSanchez: 397824,
            votosFujimori: 281472,
            actas: 3962
        },
        {
            region: "la libertad",
            votosSanchez: 352146,
            votosFujimori: 486193,
            actas: 5173
        },
        {
            region: "lambayeque",
            votosSanchez: 201358,
            votosFujimori: 347514,
            actas: 3086
        },
        {
            region: "lima",
            votosSanchez: 1845236,
            votosFujimori: 2367145,
            actas: 18724
        },
        {
            region: "loreto",
            votosSanchez: 216984,
            votosFujimori: 163518,
            actas: 2483
        },
        {
            region: "madre de dios",
            votosSanchez: 28417,
            votosFujimori: 46382,
            actas: 436
        },
        {
            region: "moquegua",
            votosSanchez: 64153,
            votosFujimori: 83142,
            actas: 582
        },
        {
            region: "pasco",
            votosSanchez: 89346,
            votosFujimori: 67181,
            actas: 873
        },
        {
            region: "piura",
            votosSanchez: 456817,
            votosFujimori: 602384,
            actas: 5348
        },
        {
            region: "puno",
            votosSanchez: 512983,
            votosFujimori: 168541,
            actas: 3981
        },
        {
            region: "san martin",
            votosSanchez: 231487,
            votosFujimori: 249803,
            actas: 2456
        },
        {
            region: "tacna",
            votosSanchez: 72461,
            votosFujimori: 108395,
            actas: 748
        },
        {
            region: "tumbes",
            votosSanchez: 48235,
            votosFujimori: 69187,
            actas: 524
        },
        {
            region: "ucayali",
            votosSanchez: 142684,
            votosFujimori: 181352,
            actas: 1695
        }
    ];

    for (const region of regiones) {
        await prisma.regiones.upsert({
            where: {
                region: region.region,
            },
            update: {},
            create: {
                region: region.region,
                votosSanchez: region.votosSanchez,
                votosFujimori: region.votosFujimori,
                actas: region.actas,
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