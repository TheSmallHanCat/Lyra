import { initializeDirectories, initializeCongfigs } from '../../Lyra.Core/units/Startup/initialization.ts';
import path from 'path';

class Engine {
    private static rootdir = process.cwd();
    private static vocoderdir = path.join(this.rootdir, 'vocoders');
    
    static initialize() {
        // 声明需要的文件夹路径
        const requiredDirectories = [
            this.vocoderdir,
        ];
        
        // 调用 units 层的初始化函数
        initializeDirectories(requiredDirectories);

        const configs = initializeCongfigs([this.vocoderdir], 'vocoder.yaml');

        return configs;
    }
};