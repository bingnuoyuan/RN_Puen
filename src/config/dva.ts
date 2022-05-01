/*
1. 创建实例
2. 加载model对象
3. 启动dva
4. 导出dva的数据
*/

import { create } from "dva-core-ts";
import createLoading from "dva-loading-ts";
import models from "@/models/index";
//1
const app = create();
//2
models.forEach(model => {
    app.model(model);
})
app.use(createLoading())
//3
app.start();
//4
export default app._store;