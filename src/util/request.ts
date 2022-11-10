import axios from 'axios'

type WaiterCallback = (res: any) => unknown

export class Waiter {
  /**
   *
   * @type {{}}
   */
  static #snMap: Map<unknown, WaiterCallback> = new Map()
  static #pathMap: Map<unknown, WaiterCallback[]> = new Map()
  static #arrMap: Map<unknown, unknown> = new Map()

  static wait(sn: unknown, cb: WaiterCallback) {
    if (this.#arrMap.has(sn)) {
      cb(sn)
    } else {
      this.#arrMap.set(sn, cb)
    }
  }

  static listen(path: string, cb: WaiterCallback) {
    if (!this.#pathMap.has(path)) {
      this.#pathMap.set(path, [])
    }
    this.#pathMap.get(path)?.push(cb)
  }

  static onArrive(path: string, sn: unknown, data: unknown) {
    this.#snMap.get(sn)?.(data)
    this.#pathMap.get(path)?.forEach(it => it(data))
    if (sn) {
      this.#arrMap.set(sn, data)
    }
  }
}

const service = axios.create({
  baseURL: 'api'
})

service.interceptors.request.use(config => config, Promise.reject)

service.interceptors.response.use(res => {
  const data = res.data
  if (!data.ok) {
    return Promise.reject(data)
  }
  if (!data.wait_id) {
    return Promise.resolve(data)
  }
  return new Promise((resolve, reject) => {
    Waiter.wait(data.wait_id, (result) => {
      if (result.ok) {
        resolve(result.data)
      }
      reject(result.err)
    })
  })
}, Promise.reject)

export default service
