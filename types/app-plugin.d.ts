import {todo} from '/@/plugin/simple'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $todo: typeof todo
  }
}
