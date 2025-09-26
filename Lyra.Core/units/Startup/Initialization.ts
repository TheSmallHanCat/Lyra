import fs = require('fs');
import path = require('path');
const yaml = require('js-yaml');
const { config } = require('process');

const initializeDirectories_general = () => {
    const rootdir = process.cwd();
    const singerdir = path.join(rootdir, 'singers');
    const pluginsdir = path.join(rootdir, 'plugins');
    const backupsdir = path.join(rootdir, 'backups');
    [singerdir, pluginsdir, backupsdir].forEach(dir => {
    if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
            console.log(`${dir} created`);
        };
     });
}

const initializeDirectories = (directories: string[]) => {
    directories.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`${dir} created`);
        }
    });
};

interface ConfigData {
    name?: string;
    [key: string]: any;
}

interface DirInfoItem {
    name: string;
    path: string;
    config: ConfigData | null;
}

const initializeCongfigs = (parentDirs: string[], configFileName: string): DirInfoItem[] => {
    const allConfigs: DirInfoItem[] = [];

    parentDirs.forEach((parentDir: string) => {
        if (fs.existsSync(parentDir)) {
            const subdirectories = fs.readdirSync(parentDir);

            subdirectories.forEach((subdir: string) => {
                const subdirPath = path.join(parentDir, subdir);
                if (fs.statSync(subdirPath).isDirectory()) {
                    const configPath = path.join(subdirPath, configFileName);
                    if (fs.existsSync(configPath)) {
                        try {
                            const rawData = fs.readFileSync(configPath, 'utf-8');
                            const configData: ConfigData = yaml.load(rawData);
                            allConfigs.push({
                                name: configData.name || subdir,
                                path: configPath,
                                config: configData,
                            });
                        } catch (error) {
                            console.error(`Error reading config ${configPath}: ${error}`);
                        }
                    }
                }
            });
        }
    });

    return allConfigs;
};

export {
    initializeDirectories,
    initializeCongfigs
};