-- CreateTable
CREATE TABLE `url` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `longurl` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `url_longurl_key`(`longurl`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
