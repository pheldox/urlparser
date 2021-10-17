/*
  Warnings:

  - You are about to drop the `url` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `url`;

-- CreateTable
CREATE TABLE `urls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `longurl` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `urls_longurl_key`(`longurl`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
