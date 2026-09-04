-- CreateTable
CREATE TABLE "Atributos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Atributos_pkey" PRIMARY KEY ("id")
);
