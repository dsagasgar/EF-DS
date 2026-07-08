-- CreateTable
CREATE TABLE `Regiones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `region` VARCHAR(100) NOT NULL,
    `votosSanchez` INTEGER NOT NULL,
    `votosFujimori` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
