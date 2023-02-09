//Основний модуль
import gulp from "gulp";
//Імпорт шляхів
import { path } from "./gulp/config/path.js"
//Імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js";


//Передаємо значення у глобальну змінну
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,

}


//Імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";


//Спостерігач за змінами у файлах
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

//Побудова сценаріїв виконання задач
const dev = gulp.series(reset, mainTasks, watcher);

//Виконання сценарію за замовчуванням
gulp.task('default', dev);

