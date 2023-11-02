-- CreateTable
CREATE TABLE "project" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "project" STRING NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);
