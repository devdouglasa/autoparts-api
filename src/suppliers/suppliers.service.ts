import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuppliersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {

    const cleanCnpj = data.cnpj.replace(/\D/g, '');

    const exists = await this.prisma.supplier.findUnique({
      where: { cnpj: cleanCnpj },
    });

    if (exists) {
      throw new ConflictException('Supplier with this CNPJ already exists');
    }

    return this.prisma.supplier.create({
      data: { ...data, cnpj: cleanCnpj },
    });
  }

  async findAll() {
    return this.prisma.supplier.findMany({
      include: { city: { include: { state: true } } },
    });
  }
}
