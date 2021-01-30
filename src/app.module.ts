import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, DbModule],
})
export class AppModule {}
