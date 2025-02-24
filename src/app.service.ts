import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey = this.configService.apiKey;
    const dbName = this.configService.database.name;
    const dbPort = this.configService.database.port;
    const baseUrl = this.configService.baseUrl;
    return `Hello World! from NextJs in this URL ===>>>  ${baseUrl}
    API_KEY: ${apiKey}
    DATABASE_NAME: ${dbName}
    DATABASE_PORT: ${dbPort}`;
  }
}
