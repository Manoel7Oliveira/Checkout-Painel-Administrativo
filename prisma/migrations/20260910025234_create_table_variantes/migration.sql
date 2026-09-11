-- CreateTable
CREATE TABLE "variantes" (
    "id" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "comprimento" DOUBLE PRECISION NOT NULL,
    "estoque" DOUBLE PRECISION NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "combo" BOOLEAN NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,
    "largura" DOUBLE PRECISION NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "json_caracteristicas" JSONB NOT NULL,
    "principal" BOOLEAN NOT NULL,
    "reated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "variantes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "variantes" ADD CONSTRAINT "variantes_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
