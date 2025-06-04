-- AlterTable
ALTER TABLE "Computer" ADD COLUMN     "coolerId" INTEGER,
ADD COLUMN     "cpuId" INTEGER,
ADD COLUMN     "gpuId" INTEGER,
ADD COLUMN     "motherboardId" INTEGER,
ADD COLUMN     "psuId" INTEGER;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "ComputerPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "ComputerPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_motherboardId_fkey" FOREIGN KEY ("motherboardId") REFERENCES "ComputerPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_psuId_fkey" FOREIGN KEY ("psuId") REFERENCES "ComputerPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_coolerId_fkey" FOREIGN KEY ("coolerId") REFERENCES "ComputerPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
