import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Player} from "./player.schema";

@Injectable()
export class PlayerService {
  constructor(@InjectModel(Player.name) private readonly playerModel: Model<Player>) {}

  async findAllByIds(ids: string[]): Promise<Player[]> {
    return this.playerModel.find({ _id: { $in: ids } }).exec();
  }
}
