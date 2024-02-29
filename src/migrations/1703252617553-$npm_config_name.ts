import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1703252617553 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.manager.query(`CREATE TABLE IF NOT EXISTS users
    (
        id uuid DEFAULT uuid_generate_v4(),
        email varchar(255) NOT NULL,
        phone_number varchar(255) NOT NULL,
        first_name varchar(255) NOT NULL,
        last_name varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        created_date timestamptz(6) not null DEFAULT NOW(),
        updated_date timestamptz(6) not null DEFAULT NOW(),
        PRIMARY KEY (id) 
    ) 
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.manager.query(`DROP TABLE users`);
  }
}
