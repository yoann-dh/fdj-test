import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {League} from "./league.schema";
import {Model} from "mongoose";

@Injectable()
export class LeagueService {
  constructor(@InjectModel(League.name) private readonly leagueModel: Model<League>) {}

  async findAll(): Promise<League[]> {
    return this.leagueModel.find().exec()
  }
}
