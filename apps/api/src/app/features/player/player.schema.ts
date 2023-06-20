import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Player {
  @Prop()
  name: string;

  @Prop()
  position: string;

  @Prop()
  thumbnail: string;

  @Prop({ type: Date })
  born: Date

  @Prop({ type: Object })
  signin: {
    amount: number;
    currency: string;
  }
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
