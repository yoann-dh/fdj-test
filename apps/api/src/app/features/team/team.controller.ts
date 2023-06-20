import {Controller, Get, InternalServerErrorException, Param, Query} from '@nestjs/common';
import {TeamService} from "./team.service";
import {Team} from "./team.schema";

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService ) {}

  @Get()
  async findAllByIds(@Query('ids') ids: string[]): Promise<Team[]> {
    try {
      return this.teamService.findAllByIds(ids)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Team> {
    try {
      return this.teamService.findOneById(id)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }

}
