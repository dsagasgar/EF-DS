/*
  Warnings:

  - A unique constraint covering the columns `[region]` on the table `Regiones` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Regiones_region_key` ON `Regiones`(`region`);
