-- CreateTable
CREATE TABLE "variantes_valores" (
    "id" TEXT NOT NULL,
    "id_variante" TEXT NOT NULL,
    "id_valor_atributo" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "variantes_valores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "variantes_valores" ADD CONSTRAINT "variantes_valores_id_variante_fkey" FOREIGN KEY ("id_variante") REFERENCES "variantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
