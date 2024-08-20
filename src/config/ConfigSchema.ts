import { ConfigType } from './types';

export default (): ConfigType => ({
  port: Number(process.env.WEB_PORT || 3000),
});
