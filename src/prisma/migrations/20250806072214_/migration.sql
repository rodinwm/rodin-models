/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `RodPic` table. All the data in the column will be lost.
  - Added the required column `content` to the `RodPic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RodPic" DROP COLUMN "imageUrl",
ADD COLUMN     "content" JSONB NOT NULL;
