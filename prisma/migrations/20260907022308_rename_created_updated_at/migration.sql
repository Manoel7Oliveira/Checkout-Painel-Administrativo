/*
  Warnings:

  - You are about to drop the column `create_at` on the `Atributos` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `Atributos` table. All the data in the column will be lost.
  - You are about to drop the column `create_at` on the `valores_atributos` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `valores_atributos` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Atributos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `valores_atributos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atributos" DROP COLUMN "create_at",
DROP COLUMN "update_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "valores_atributos" DROP COLUMN "create_at",
DROP COLUMN "update_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
