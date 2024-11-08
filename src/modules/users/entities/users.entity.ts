import { Column, Entity, BeforeInsert } from 'typeorm';
import { hashSync } from 'bcrypt';

import { BaseEntity } from '@/common/entities/base.entity';

@Entity('mh_tb_user')
export class UsersEntity extends BaseEntity {
  /** Columns */
  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  refreshToken: string;
  
  @Column()
  high_score?: number;

  @Column()
  high_score_difficulty?: string;
  
  @Column({ type: 'timestamp' })
  high_score_date?: string;
  
  /** Joins */

  /** Methods */
  @BeforeInsert()
  hash() {
    this.password = hashSync(this.password, 10);
  }
}
