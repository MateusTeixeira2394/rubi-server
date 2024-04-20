import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  hashedPassword?: string;

  @Column()
  roleId: number;

  @Column({ default: true })
  isActive?: boolean;
}
