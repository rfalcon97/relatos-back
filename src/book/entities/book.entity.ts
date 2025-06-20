import {
  Entity,
  PrimaryGeneratedColumn,
  Column,    
} from 'typeorm';

@Entity({ name: 'TBOOKS' }) // Nombre de la tabla en plural por convención
export class Book {
  @PrimaryGeneratedColumn()
  idLibro: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  author: string;

  @Column({ type: 'varchar', length: 100 })
  categoria: string;

  @Column({ type: 'varchar', length: 'MAX' })
  sinopsis: string;

  @Column({ type: 'varchar', length: 250 })
  isbn: string;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'date', nullable: true })
  publishedDate: string;

  @Column({ type: 'datetime' })
  createdAt: string;
}
