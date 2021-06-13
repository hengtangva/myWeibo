// 配置信息文件，方便以后修改

// 开发环境
const devBaseUrl = "http://123.207.32.32:9001";

// 生厂环境
const proBaseUrl = "http://123.207.32.32:9001";

// baseURL
export const BASE_URL = process.env.MODE_ENV === "development"? devBaseUrl:proBaseUrl;

export const timeout = 3000;