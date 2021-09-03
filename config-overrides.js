const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    /* 按需引入样式 */
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    /* 自定义主题 */
    addLessLoader({
        lessOptions:{
            javascriptEnabled:true,
            modifyVars:{
                '@primary-color': '#1DA57A'
            }
        }
    })
);