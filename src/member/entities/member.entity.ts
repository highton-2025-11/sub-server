import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
