import { Module,CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';



@Module({
  imports: [PrismaModule,CacheModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
