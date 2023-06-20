import {Controller, Get, InternalServerErrorException, Query} from '@nestjs/common';
import {Player} from "./player.schema";
import {PlayerService} from "./player.service";
import {Team} from "../team/team.schema";

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {
  }
  @Get()
  async findAllByIds(@Query('ids') ids: string[]): Promise<Player[]> {
    try {
      return this.playerService.findAllByIds(ids)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
