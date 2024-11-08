import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class BkTbquestions1718321413380 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mh_tb_questions',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'user',
            type: 'varchar',
          },
          {
            name: 'difficulty',
            type: 'varchar',
          },
          {
            name: 'question',
            type: 'varchar',
          },
          {
            name: 'correct_answer',
            type: 'double',
          },
          {
            name: 'answer',
            type: 'double',
          },
          {
            name: 'current_score',
            type: 'double',
          },
          {
            name: 'answering_time',
            type: 'double',
          },
          {
            name: 'is_corret',
            type: 'tinyint',
            length: '1',
          },
          {
            name: 'has_multiplication',
            type: 'tinyint',
            length: '1',
          },
          {
            name: 'has_division',
            type: 'tinyint',
            length: '1',
          },
          {
            name: 'steps',
            type: 'int',
            default: '1',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
    await queryRunner.createForeignKey(
      'mh_tb_questions',
      new TableForeignKey({
        columnNames: ['user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'mh_tb_user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        name: 'FK_question_user',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('mh_tb_questions', 'FK_question_user');
    await queryRunner.dropTable('mh_tb_questions');
  }
}
