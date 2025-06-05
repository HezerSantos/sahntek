-- AlterTable
ALTER TABLE "Computer" ADD COLUMN     "ramId" INTEGER;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_ramId_fkey" FOREIGN KEY ("ramId") REFERENCES "ComputerPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
