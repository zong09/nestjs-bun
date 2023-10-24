import { ConsoleLogger } from '@nestjs/common';

export class AppLogger extends ConsoleLogger {
  metric(metricName: string): void {
    super.log('metric ' + metricName);
  }
}
