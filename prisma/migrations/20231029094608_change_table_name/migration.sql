/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Data";

-- CreateTable
CREATE TABLE "data" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "project" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" STRING NOT NULL,
    "gcs_path" STRING NOT NULL,
    "geoserver_layer" STRING NOT NULL,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);
