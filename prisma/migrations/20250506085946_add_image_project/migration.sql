/*
  Warnings:

  - Added the required column `image` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "image" SET DEFAULT 'img';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "image" TEXT NOT NULL;
