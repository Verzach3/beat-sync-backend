import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlaylistsService } from './playlists/playlists.service';
import { PlaylistsModule } from './playlists/playlists.module';
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
  ],
  controllers: [AppController],
  providers: [AppService, PlaylistsService],
})
export class AppModule {}
