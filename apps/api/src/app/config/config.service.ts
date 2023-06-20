import { Injectable } from '@nestjs/common';
import Joi, { AnySchema } from 'joi';
import dotenv from 'dotenv';
import {Config} from "./config.interface";
import {MongooseModuleOptions} from "@nestjs/mongoose";

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const baseSchema: Record<keyof Config, AnySchema> = {
      PORT: Joi.number().default(3000),
      NODE_ENV: Joi.string()
        .valid(...['development', 'production'])
        .default('development'),
      MONGO_PASSWORD: Joi.string(),
      MONGO_USER: Joi.string(),
      MONGO_HOST: Joi.string(),
      MONGO_DATABASE: Joi.string()
    };

    const schema = { ...baseSchema };

    if (!ConfigService.isProduction()) {
      const result = dotenv.config({ path: '.env.dev' });
      if (result.error) {
        throw result.error;
      }
    }
    this.envConfig = ConfigService.validateInput(schema, process.env);


  }

  static isProduction() {
    return process.env.NODE_ENV === 'production';
  }

  get(key: keyof Config): string {
    return this.envConfig[key];
  }

  get expressPort(): number {
    return Number(this.get('PORT'));
  }

 get mongoConfig (): MongooseModuleOptions {
    return {
      uri: `mongodb://${this.get('MONGO_USER')}:${this.get('MONGO_PASSWORD')}@${this.get('MONGO_HOST')}/?authMechanism=DEFAULT`,
      dbName: this.get('MONGO_DATABASE')
    }
 }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private static validateInput(
    schema: Record<keyof Config, AnySchema>,
    envConfig: EnvConfig,
  ): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object(schema).options({
      stripUnknown: true,
    });

    const { error, value: validatedEnvConfig } =
      envVarsSchema.validate(envConfig);
    if (error) {
      console.error(`Config validation error: ${error.message}`);
      process.exit(1);
    }
    return validatedEnvConfig;
  }
}
