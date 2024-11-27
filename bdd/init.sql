-- Supprimer la table Hero si elle existe déjà
DROP TABLE IF EXISTS `Hero`;

-- Supprimer la table Role si elle existe déjà
DROP TABLE IF EXISTS `Role`;

-- Créer la table Role
CREATE TABLE `Role` (
    id_Role INT AUTO_INCREMENT NOT NULL,
    role_name VARCHAR(255),
    health_Hero INT,
    attackPower_Hero INT,
    attackRange_Hero INT,
    moveRange_Hero INT,
    vitesse_Hero INT,
    sprite_color_Role VARCHAR(255),
    PRIMARY KEY (id_Role)
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `Role`
--

INSERT INTO `Role` (`role_name`, `health_Hero`, `attackPower_Hero`, `attackRange_Hero`, `moveRange_Hero`, `vitesse_Hero`, `sprite_color_Role`) VALUES
('Maitre Snake', 10, 4, 2, 4, 12, -40),
('Druide', 8, 3, 3, 4, 5, 100),
('Sorcier JavaScribe', 10, 4, 5, 4, 8, 240),
('Maitre BDD', 10, 4, 3, 5, 7, 370),
('Inebranlable', 20, 3, 1, 2, 1, 550),
('Guerrier Warhammer', 12, 6, 1, 3, 6, 65),
('Maitre PHP', 11, 5, 3, 3, 9, 20),
('Necromancien', 13, 2, 5, 5, 4, 100),
('Fondateur de monde', 15, 4, 3, 5, 3, 185),
('Pretresse du CSS', 9, 5, 6, 3, 11, 340),
('Hackerman', 10, 6, 1, 10, 10, 10),
('Maitre IA', 14, 2, 10, 3, 2, 210);

-- Créer la table Hero
CREATE TABLE `Hero` (
    id_Hero INT AUTO_INCREMENT NOT NULL,
    name_Hero VARCHAR(255),
    xp_Hero INT,
    lvl_Hero INT,
    id_Role INT,
    PRIMARY KEY (id_Hero),
    CONSTRAINT FK_Hero_id_Role FOREIGN KEY (id_Role) REFERENCES `Role` (id_Role)
) ENGINE=InnoDB;