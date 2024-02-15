import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.ketchup',
  appName: 'ketchup',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
