import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity({ name: 'dogs' })
export class Dog {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  url: string

  @CreateDateColumn()
  created: Date
}
