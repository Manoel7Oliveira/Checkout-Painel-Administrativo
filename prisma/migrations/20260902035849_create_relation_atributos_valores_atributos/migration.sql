-- AddForeignKey
ALTER TABLE "valores_atributos" ADD CONSTRAINT "valores_atributos_id_atributo_fkey" FOREIGN KEY ("id_atributo") REFERENCES "Atributos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
