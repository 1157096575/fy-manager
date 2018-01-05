const API_URL = process.env.BASE_API;

export default {
    API_URL: API_URL,
    UPLOAD_FILE: API_URL+'/upload-image', //富文本上传地址
    UPLOAD:API_URL+'/upload'//文件上传
}