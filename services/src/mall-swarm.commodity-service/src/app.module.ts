import { Module } from '@nestjs/common';
import { HttpApiModule } from './httpApi/httpapi.module';

@Module({
    imports: [HttpApiModule],
    controllers: [],
})
export class AppModule {}
