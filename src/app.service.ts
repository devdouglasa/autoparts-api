import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá, bem vindo! acesse /docs para saber mais!';
  }
}
