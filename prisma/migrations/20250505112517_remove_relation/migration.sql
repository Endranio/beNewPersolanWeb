/*
  Warnings:

  - You are about to drop the column `userId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `TechStack` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_userId_fkey";

-- DropIndex
DROP INDEX "Profile_userId_key";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "TechStack" DROP COLUMN "userId";
