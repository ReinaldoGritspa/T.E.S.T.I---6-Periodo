/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */


import { Logger, Module } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from '../../shared/shared.module';

const UseCases = Object.values(UseCases);
const Repositories = Object.values(Repositories);


@Module({
  imports:[SharedModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ...UseCases, ...Repositories, Logger],
})
export class ScenarioModule {}
