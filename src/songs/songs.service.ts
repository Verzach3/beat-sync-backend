import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './songs.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song) private readonly userRepository: Repository<Song>,
  ) {}

  async findAll(): Promise<Song[]> {
    return this.userRepository.find({ take: 0 });
  }

  async findOne(id: string): Promise<Song | undefined> {
    console.log(ObjectId.createFromHexString(id).toString() as any);
    return this.userRepository.findOneBy({
      id: ObjectId.createFromHexString(id).toString() as any,
    });
  }

  async create(song: Song): Promise<Song> {
    return this.userRepository.save(song);
  }

  async update(id: string, song: Song): Promise<Song | undefined> {
    await this.userRepository.update({ id: id as any }, song);
    return this.userRepository.findOneBy({ id: id as any });
  }
}
