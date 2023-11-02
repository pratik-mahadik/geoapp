-- CreateTable
CREATE TABLE "Data" (
    "id" STRING NOT NULL,
    "project" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" STRING NOT NULL,
    "gcs_path" STRING NOT NULL,
    "geoserver_layer" STRING NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);
