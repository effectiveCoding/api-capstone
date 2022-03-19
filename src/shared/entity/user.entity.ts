import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'username', nullable: false, unique: true })
  username: string

  @Column({ name: 'email', nullable: false, unique: true })
  email: string

  @Column({ name: 'password', type: 'text', nullable: false })
  password: string

  @CreateDateColumn({ name: 'dateCreated', type: 'timestamptz' })
  dateCreated: Date

  @UpdateDateColumn({ name: 'dateUpdated', type: 'timestamptz' })
  dateUpdated: Date
}
