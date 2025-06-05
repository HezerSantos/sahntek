/*
  Warnings:

  - You are about to drop the column `computerId` on the `ComputerPart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ComputerPart" DROP CONSTRAINT "ComputerPart_computerId_fkey";

-- AlterTable
ALTER TABLE "ComputerPart" DROP COLUMN "computerId";
