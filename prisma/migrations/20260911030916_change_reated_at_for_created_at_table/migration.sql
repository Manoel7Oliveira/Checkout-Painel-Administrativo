/*
  Warnings:

  - You are about to drop the column `reated_at` on the `variantes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "variantes" DROP COLUMN "reated_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
