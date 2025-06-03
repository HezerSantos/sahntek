/*
  Warnings:

  - You are about to drop the column `imageurl` on the `Computer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Computer" DROP COLUMN "imageurl";

-- CreateTable
CREATE TABLE "ComputerImages" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "computerId" INTEGER NOT NULL,

    CONSTRAINT "ComputerImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ComputerImages" ADD CONSTRAINT "ComputerImages_computerId_fkey" FOREIGN KEY ("computerId") REFERENCES "Computer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
