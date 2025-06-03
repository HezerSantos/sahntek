/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ComputerPart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `computerId` to the `ComputerPart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ComputerPart" ADD COLUMN     "computerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Computer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "performance" TEXT NOT NULL,

    CONSTRAINT "Computer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ComputerPart_name_key" ON "ComputerPart"("name");

-- AddForeignKey
ALTER TABLE "ComputerPart" ADD CONSTRAINT "ComputerPart_computerId_fkey" FOREIGN KEY ("computerId") REFERENCES "Computer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
