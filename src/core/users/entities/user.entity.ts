import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

export class UsersEntity {
  @PrimaryColumn()
  @Column({ type: 'uuid' })
  id: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'phone_number', type: 'varchar' })
  phoneNumber: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @CreateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
