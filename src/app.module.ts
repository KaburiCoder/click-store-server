import { Module } from '@nestjs/common';
import { EventsModule } from './socket-io/events/events.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    EventsModule,
    TasksModule,
  ],
})
export class AppModule {}
