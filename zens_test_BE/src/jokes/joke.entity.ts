/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ default: "" })
  content: string;

  @ApiProperty()
  @Column({ default: 0 })
  like: number;

  @ApiProperty()
  @Column({ default: 0 })
  dislike: number;
}
