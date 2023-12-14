import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlaylistsService } from './playlists/playlists.service';
import { PlaylistsModule } from './playlists/playlists.module';
import { SongsModule } from './songs/songs.module';
import { AlbumsService } from './albums/albums.service';
import { AlbumsModule } from './albums/albums.module';
import { ArtistsService } from './artists/artists.service';
import { ArtistsModule } from './artists/artists.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    PlaylistsModule,
    SongsModule,
    AlbumsModule,
    ArtistsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PlaylistsService, AlbumsService, ArtistsService],
})
export class AppModule {}
