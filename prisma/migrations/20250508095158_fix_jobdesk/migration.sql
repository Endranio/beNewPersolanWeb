/*
  Warnings:

  - You are about to drop the column `jobDesk` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "jobDesk",
ADD COLUMN     "jobdesk" TEXT[];
