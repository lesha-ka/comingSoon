import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp, 
    plugins: plugins
}

import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { vendorJs } from "./gulp/tasks/vendorJs.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";
 

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.vendorJs, vendorJs);
    gulp.watch(path.watch.images, images);
}

const font = gulp.series(fonts);

const mainTasks = gulp.series(font, gulp.parallel(html, scss, js, vendorJs, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const scssdev = gulp.series(gulp.parallel(scss));

export { dev }
export { build }
export { scssdev }

gulp.task('default', dev);

// при создании нового проекта скачать зависимости npm i -D
// команда gulp запускает режим разработки
// команда gulp build просто собирает проект
// При сборке файлы и папки находящиеся в src/file, перемещаются в dist/