/*
  Warnings:

  - Added the required column `completed` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "completed" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL;