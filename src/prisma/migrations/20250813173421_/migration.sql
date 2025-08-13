/*
  Warnings:

  - You are about to drop the column `content` on the `RodPic` table. All the data in the column will be lost.
  - Added the required column `date` to the `RodPic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstPic` to the `RodPic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondPic` to the `RodPic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RodPic" DROP COLUMN "content",
ADD COLUMN     "date" INTEGER NOT NULL,
ADD COLUMN     "firstPic" TEXT NOT NULL,
ADD COLUMN     "secondPic" TEXT NOT NULL;
