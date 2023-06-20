import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Team {

  @Prop()
  name: string;

  @Prop()
  thumbnail: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
