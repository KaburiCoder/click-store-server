import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  @Cron(CronExpression.EVERY_4_HOURS)
  async updateSendTypeOfPayments() {
    const response = await fetch(
      `${process.env.NEXT_URL}/api/orders/update-send-types`,
      {
        method: 'PATCH',
        body: JSON.stringify({ afterDays: 7 }),
      }
    );
    const result = await response.json();
    console.log('updateSendTypeOfPayments', result);
  }
}
