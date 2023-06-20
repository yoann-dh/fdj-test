import { Module } from '@nestjs/common';
import { LeagueModule } from './features/league/league.module';
import { TeamModule } from './features/team/team.module';
import { PlayerModule } from './features/player/player.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, LeagueModule, TeamModule, PlayerModule]
})
export class AppModule {}
