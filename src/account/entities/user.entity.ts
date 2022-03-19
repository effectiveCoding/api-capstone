import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'name', nullable: false, type: 'varchar' })
  name: string

  @Column({ name: 'username', nullable: false, type: 'varchar', unique: true })
  username: string

  @Column({ name: 'email', nullable: false, type: 'varchar', unique: true })
  email: string

  @Column({ name: 'password', nullable: false, type: 'text' })
  password: string

  @CreateDateColumn({
    name: 'dateCreated',
    nullable: false,
    type: 'timestamptz'
  })
  dateCreated: Date
  @CreateDateColumn({
    name: 'dateUpdated',
    nullable: false,
    type: 'timestamptz'
  })
  dateUpdated: Date
}
