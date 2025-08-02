import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Following } from '../../following/entities/following.entity';

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

  @ApiProperty({ description: '팔로우 중인 유저 목록입니다.' })
  @OneToMany(() => Following, (following) => following.from)
  followings: Following[];
}
