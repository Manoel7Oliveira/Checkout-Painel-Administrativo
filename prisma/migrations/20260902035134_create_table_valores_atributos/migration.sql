-- CreateTable
CREATE TABLE "valores_atributos" (
    "id" TEXT NOT NULL,
    "id_atributo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "valores_atributos_pkey" PRIMARY KEY ("id")
);
