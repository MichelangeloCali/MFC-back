-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME
);
INSERT INTO "new_User" ("createdAt", "deletedAt", "email", "id", "name", "updatedAt") SELECT "createdAt", "deletedAt", "email", "id", "name", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_HealthFacility" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "shiftsPerDay" INTEGER NOT NULL,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME
);
INSERT INTO "new_HealthFacility" ("createdAt", "deletedAt", "hours", "id", "name", "shiftsPerDay", "type", "updatedAt") SELECT "createdAt", "deletedAt", "hours", "id", "name", "shiftsPerDay", "type", "updatedAt" FROM "HealthFacility";
DROP TABLE "HealthFacility";
ALTER TABLE "new_HealthFacility" RENAME TO "HealthFacility";
CREATE UNIQUE INDEX "HealthFacility_name_key" ON "HealthFacility"("name");
CREATE TABLE "new_Shift" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "healthFacilityId" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "period" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    CONSTRAINT "Shift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Shift_healthFacilityId_fkey" FOREIGN KEY ("healthFacilityId") REFERENCES "HealthFacility" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Shift" ("available", "createdAt", "deletedAt", "duration", "endTime", "healthFacilityId", "id", "period", "startTime", "updatedAt", "userId") SELECT "available", "createdAt", "deletedAt", "duration", "endTime", "healthFacilityId", "id", "period", "startTime", "updatedAt", "userId" FROM "Shift";
DROP TABLE "Shift";
ALTER TABLE "new_Shift" RENAME TO "Shift";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
