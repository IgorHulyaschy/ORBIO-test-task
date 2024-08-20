import { ConfigModule as CModule } from '@nestjs/config';

import config from './ConfigSchema';

export const ConfigModule = CModule.forRoot({
  load: [config],
  isGlobal: true,
  cache: true,
});
