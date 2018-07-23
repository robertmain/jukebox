import { Module } from '@nestjs/common';
import { Configuration } from './config.service';
import { config } from './config';

@Module({
    providers: [
        {
            provide: Configuration,
            useValue: new Configuration(config),
        },
    ],
    exports: [Configuration],
})
export class ConfigModule { }
