import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default (command: string) => defineConfig({
    base: command === 'build' ? '/css-3d/': '/',
    plugins: [reactRefresh()]
});
