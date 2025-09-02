/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';  
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioUseCase } from './use-cases/listall-scenario.use-case';

@Injectable()
export class ScenarioService {
  constructor(private readonly CreateScenarioUseCase: CreateScenarioUseCase) {}
      
  create(data: CreateScenarioDto) {
    return this.CreateScenarioUseCase.execute(data);
  }

  findAll() {
    return this.ListScenarioUseCase.list();
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: number, UpdateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
