-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "prazo" DATETIME NOT NULL,
    "completa" BOOLEAN DEFAULT false
);
INSERT INTO "new_Tarefa" ("completa", "desc", "id", "prazo") SELECT "completa", "desc", "id", "prazo" FROM "Tarefa";
DROP TABLE "Tarefa";
ALTER TABLE "new_Tarefa" RENAME TO "Tarefa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
