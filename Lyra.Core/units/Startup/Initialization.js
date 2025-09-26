"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { config } = require('process');
const checkdir = () => {
    // get roor dir
    const rootdir = process.cwd();
    // get dir
    const singerdir = path.join(rootdir, 'singers');
    const vocoderdir = path.join(rootdir, 'vocoders');
    const pluginsdir = path.join(rootdir, 'plugins');
    const backupsdir = path.join(rootdir, 'backups');
    // create dir
    [singerdir, vocoderdir, pluginsdir, backupsdir].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`${dir} created`);
        }
        ;
    });
    // read config
    const singerinfo = readconfig(singerdir);
    const vocoderinfo = readconfig(vocoderdir);
    return {
        singerinfo,
        vocoderinfo
    };
};
const readconfig = (dir) => {
    const info = [];
    if (!fs.existsSync(dir))
        return info;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            const configfiles = ['config.yaml', 'vocoder.yaml'];
            let configdata = null;
            for (const configfile of configfiles) {
                const configpath = path.join(filepath, configfile);
                if (fs.existsSync(configpath)) {
                    try {
                        const rawdata = fs.readFileSync(configpath, 'utf-8');
                        configdata = yaml.load(rawdata);
                        break;
                    }
                    catch (error) {
                        console.error(`Error reading ${configfile}: ${error}`);
                    }
                }
            }
            info.push({
                name: configdata?.name || file,
                path: filepath,
                config: configdata,
            });
        }
    });
    return info;
};
module.exports = {
    checkdir,
    readconfig
};
