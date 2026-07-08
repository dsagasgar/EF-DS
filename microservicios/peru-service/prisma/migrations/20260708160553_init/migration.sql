/*
  Warnings:

  - Added the required column `actas` to the `Regiones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Regiones` ADD COLUMN `actas` INTEGER NOT NULL;
