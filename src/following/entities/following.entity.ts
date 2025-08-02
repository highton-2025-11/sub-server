import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Member } from '../../member/entities/member.entity';

@Entity()
export class Following {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => Member, (member) => member.followings, { eager: true })
  from: Member;

  @ApiProperty()
  @ManyToOne(() => Member, (member) => member.followings, { eager: true })
  to: Member;
}
