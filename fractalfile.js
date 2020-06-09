'use strict';

/* Fractalのインスタンスの作成とエクスポート */
const fractal = module.exports = require('@frctl/fractal').create();

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'CSS Style Guide');

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components');

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs');

/* 読み込む外部CSSの指定 (変更する場合は監視をリセットする) */
fractal.web.set('server.sync', true);
fractal.web.set('static.path', __dirname + '/oocss/css');
fractal.web.set('static.mount', 'css');

/* 静的HTMLに書き出すディレクトリ名の設定 */
fractal.web.set('builder.dest', __dirname + '/library');
