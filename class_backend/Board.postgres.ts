import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

// 보드 클래스를 테이블로 만들어 줘야한다는 걸 typeorm에 
// 전달 된다. @Entity는 함수다
@Entity()
export class Board {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}

