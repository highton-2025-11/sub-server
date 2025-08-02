import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../../message/entities/message.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Member {
  @ApiProperty({ description: 'id입니다.' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '유저 이름입니다.' })
  @Column()
  username: string;

  @ApiProperty({ description: '비밀번호입니다.' })
  @Column()
  password: string;

  @ApiProperty({ description: '유저가 보낸 메시지 목록입니다.' })
  @OneToMany(() => Message, (message) => message.sender)
  messages: Message[];
}
