import { resolve } from 'path';

// ref: https://umijs.org/config/
export default {
    // 指定 react-router 的 base，部署到非根目录时需要配置
    base: 'baiyezi-factory',
    publicPath: '/baiyezi-factory/',
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: {
                    immer: true,
                },
                // dynamicImport: true,
                title: 'baiyezi-factory',
                dll: true,
                pwa: true,
                routes: {
                    exclude: [/components\//],
                },
                hardSource: true,
            },
        ],
    ],
    alias: {
        '@src': resolve(__dirname, 'src'),
    },
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:7001',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        },
    },
    theme: {
        '@primary-color': '#13c2c2',
    },
    targets: {
        ie: 11,
    },
};
