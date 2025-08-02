import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Message {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  rawContent: string;

  @ApiProperty()
  @ManyToOne(() => Member, (member) => member.messages)
  sender: Member;
}
