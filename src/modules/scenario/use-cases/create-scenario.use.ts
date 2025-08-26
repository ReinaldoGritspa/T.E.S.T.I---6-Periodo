/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateScenarioRepository } from "../repository/create-scenario.repository";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable()
export class CreateScenarioUseCase {
    constructor(
        private readonly createScenarioRepository: CreateScenarioRepository,
        private  readonly logger: Logger,
    ) { }

async execute(data: CreateScenarioDto) {    
    try {
        const scenario = await this.CreateScenarioRepository.create(data);
    } catch (error) {
        this.logger.error(error);
    }
}
}