/*
  Warnings:

  - Made the column `coolerId` on table `Computer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cpuId` on table `Computer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gpuId` on table `Computer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `motherboardId` on table `Computer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `psuId` on table `Computer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ramId` on table `Computer` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_coolerId_fkey";

-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_cpuId_fkey";

-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_gpuId_fkey";

-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_motherboardId_fkey";

-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_psuId_fkey";

-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_ramId_fkey";

-- AlterTable
ALTER TABLE "Computer" ALTER COLUMN "coolerId" SET NOT NULL,
ALTER COLUMN "cpuId" SET NOT NULL,
ALTER COLUMN "gpuId" SET NOT NULL,
ALTER COLUMN "motherboardId" SET NOT NULL,
ALTER COLUMN "psuId" SET NOT NULL,
ALTER COLUMN "ramId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ComputerImages" ADD COLUMN     "color" TEXT;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "ComputerPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "ComputerPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_ramId_fkey" FOREIGN KEY ("ramId") REFERENCES "ComputerPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_motherboardId_fkey" FOREIGN KEY ("motherboardId") REFERENCES "ComputerPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_psuId_fkey" FOREIGN KEY ("psuId") REFERENCES "ComputerPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_coolerId_fkey" FOREIGN KEY ("coolerId") REFERENCES "ComputerPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
