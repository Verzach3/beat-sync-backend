import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFile } from 'fs/promises';
import { SongsService } from './songs.service';
import { Song } from './songs.entity';
@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  async getAllSongs() {
    return await this.songsService.findAll();
  }
  @Get('/:id')
  async getSong(@Param('id') id: string) {
    console.log(id);
    return await this.songsService.findOne(id);
  }
  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() song: Record<string, any>,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { nanoid } = await import('nanoid');
    // code to save the file in disk
    const savePath = `./uploads/${nanoid()}-${file.originalname}`;
    await writeFile(savePath, file.buffer);

    song.album = JSON.parse(song.album);
    song.artists = JSON.parse(song.artists);
    song.genre = JSON.parse(song.genre);
    song.path = savePath;
    console.log(song);

    const newSong = new Song();
    newSong.songName = song.songName;
    newSong.duration = song.duration ?? '2:00';
    newSong.album = song.album;
    newSong.single = song.single;
    newSong.artists = song.artists;
    newSong.genre = song.genre;
    newSong.year = song.year;
    newSong.path = song.path;
    console.log(newSong);

    return this.songsService.create(newSong);
  }
}
