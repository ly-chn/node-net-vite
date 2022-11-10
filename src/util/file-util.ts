export type FileGetUrlParams = {
  user: string
  unix: string
  number: number
}
export class FileUtil{
  /**
   * 获取文件下载地址
   */
  static async getUrl(params: FileGetUrlParams){
    return '/api/file/download?key='+[params.user, params.unix, params.number].join('-')
  }
}
