-- CreateTable
CREATE TABLE "Tarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "prazo" DATETIME NOT NULL,
    "completa" BOOLEAN NOT NULL
);
