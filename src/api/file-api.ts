export const fileApi = {
  /**
   * 获取文件下载连接
   */
  async getUrl({user, unix, number}: { user: unknown, unix: unknown, number: unknown }) {
    return `/api/file/download?key=${user}-${unix}-${number}`
  },
}
