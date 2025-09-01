/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';

@Injectable()
export class ListScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}
