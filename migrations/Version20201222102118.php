<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201222102118 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE discussion_list (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE discussion_list_user (discussion_list_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_4B3BD4F6B5F03036 (discussion_list_id), INDEX IDX_4B3BD4F6A76ED395 (user_id), PRIMARY KEY(discussion_list_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE discussion_list_user ADD CONSTRAINT FK_4B3BD4F6B5F03036 FOREIGN KEY (discussion_list_id) REFERENCES discussion_list (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE discussion_list_user ADD CONSTRAINT FK_4B3BD4F6A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE discussion_user');
        $this->addSql('ALTER TABLE discussion ADD discussion_list_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE discussion ADD CONSTRAINT FK_C0B9F90FB5F03036 FOREIGN KEY (discussion_list_id) REFERENCES discussion_list (id)');
        $this->addSql('CREATE INDEX IDX_C0B9F90FB5F03036 ON discussion (discussion_list_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE discussion DROP FOREIGN KEY FK_C0B9F90FB5F03036');
        $this->addSql('ALTER TABLE discussion_list_user DROP FOREIGN KEY FK_4B3BD4F6B5F03036');
        $this->addSql('CREATE TABLE discussion_user (discussion_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_A8FD7A7F1ADED311 (discussion_id), INDEX IDX_A8FD7A7FA76ED395 (user_id), PRIMARY KEY(discussion_id, user_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE discussion_user ADD CONSTRAINT FK_A8FD7A7F1ADED311 FOREIGN KEY (discussion_id) REFERENCES discussion (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE discussion_user ADD CONSTRAINT FK_A8FD7A7FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE discussion_list');
        $this->addSql('DROP TABLE discussion_list_user');
        $this->addSql('DROP INDEX IDX_C0B9F90FB5F03036 ON discussion');
        $this->addSql('ALTER TABLE discussion DROP discussion_list_id');
    }
}
