import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TaskEntity, (task) => task.children)
  @JoinColumn({ name: 'parentId' })
  parent: TaskEntity;

  @Column({ nullable: true })
  parentId: string;

  @OneToMany(() => TaskEntity, (task) => task.parent)
  children: TaskEntity[];

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
