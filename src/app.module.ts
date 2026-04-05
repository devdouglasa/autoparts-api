import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { SuppliersService } from './suppliers/suppliers.service';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [PrismaModule, SuppliersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, SuppliersService],
})
export class AppModule {}
