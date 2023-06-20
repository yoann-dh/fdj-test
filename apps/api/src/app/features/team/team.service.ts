import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Team} from "./team.schema";

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private readonly teamModel: Model<Team>) {}

  async findAllByIds(ids: string[]): Promise<Team[]> {
    return this.teamModel.find({ _id: { $in: ids } }).exec();
  }

  async findOneById(id: string): Promise<Team> {
    return this.teamModel.findById(id).exec()
  }
}
