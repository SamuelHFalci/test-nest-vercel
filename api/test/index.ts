import { NestFactory } from '@nestjs/core';
import { TestModule } from '../../src/test/test.module';
import { AppModule } from '../../src/app.module';
import { TestService } from 'src/test/test.service';
export const handler = async (request: any, response: any) => {
  // Find record on dynamoDB for preventing duplications

  const app = await NestFactory.create(AppModule);
  const testService = await app.select(TestModule).resolve(TestService);
  const resp = await testService.findAll();
  response.end(resp);
};
