import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from '@/common/entities/base.entity';
import { UsersEntity } from '@/modules/users/entities/users.entity';

@Entity('mh_tb_questions')
export class QuestionsEntity extends BaseEntity {
  /** Columns */
  @Column()
  name: string;

  @Column()
  difficulty?: string;

  @Column({
    type: 'double',
  })
  current_score: number;

  @Column({
    type: 'double',
  })
  answering_time: number;

  @Column()
  question: string;

  @Column({ type: 'double' })
  answer: number;

  @Column({ type: 'double' })
  correct_answer: number;

  @Column({ type: 'bool' })
  is_correct: boolean;

  @Column({ type: 'bool' })
  has_multiplication: boolean;

  @Column({ type: 'bool' })
  has_division: boolean;

  @Column({ type: 'double' })
  steps: number;

  /** Joins */
  @ManyToOne(() => UsersEntity, {
    eager: false,
    nullable: false,
  })
  @JoinColumn({
    name: 'user',
    referencedColumnName: 'id',
  })
  user: string;

  /** Methods */
}
