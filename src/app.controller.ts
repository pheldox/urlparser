import { Controller, Get,Param, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import urls from '../prisma/urls'



@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly prisma: PrismaService
  ) { }

  @UseInterceptors(CacheInterceptor)
  @Get('urls/:id')
  async urls(@Param('id') id: string) {
    return await this.appService.findId(id);
  }


}
