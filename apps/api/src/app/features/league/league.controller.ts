import {Controller, Get, InternalServerErrorException} from '@nestjs/common';
import {LeagueService} from "./league.service";
import {League} from "./league.schema";

@Controller('leagues')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get()
  async findAll(): Promise<League[]> {
    try {
      return this.leagueService.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
