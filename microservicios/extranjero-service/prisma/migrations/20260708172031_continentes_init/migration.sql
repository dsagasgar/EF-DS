/*
  Warnings:

  - You are about to drop the `Regiones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Regiones`;

-- CreateTable
CREATE TABLE `Continentes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `continente` VARCHAR(100) NOT NULL,
    `votosSanchez` INTEGER NOT NULL,
    `votosFujimori` INTEGER NOT NULL,
    `actas` INTEGER NOT NULL,

    UNIQUE INDEX `Continentes_continente_key`(`continente`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
