/**
 * 一个没看懂
 */
export enum ApiEnum {
  NodeMine = 'node/position',
  NodeList = 'node/list',
  NodeAddrList = 'node/addr/list',
  NodeAdd = 'node/add',
  NodeAppend = 'node/append',
  NodeSend = 'node/send',
  AuthJoinApply = 'auth/join',
  AuthJoinAgree = 'auth/join/agree',
  AuthVerify = 'auth/verify',
  SlaveInfo = 'slave/info',
  FileUpload = 'file/upload',
  FileDownload = 'file/download',
  AuthLogin = 'auth/login',
  AuthLogout = 'auth/logout',
  AuthMine = 'auth/mine',
  AuthOnline = 'auth/online',
  AuthCreate = 'auth/create',
  AuthShare = 'auth/share',
  AuthJoinList = 'auth/join/list',
  UserMine = 'user/mine',
  UserProfileGet = 'profile/get',
  UserProfileSet = 'profile/set',
  UserContactList = 'contact/list',
  UserContactAdd = 'contact/add',
  UserMessageList = 'message/list',
  UserMessagePull = 'message/pull',
  UserMessageSend = 'message/send',
  ForumList = 'forum/list',
  ForumPost = 'forum/post',
  ForumGet = 'forum/get',
  ForumComment = 'forum/comment',
  ForumIndexes = 'forum/debug/indexes',

  PushError = 'error',
  PushNodeChange = 'node/change',
  PushNodeMessage = 'node/echo',
  PushAuthChange = 'auth/change',
  PushAuthJoinApply = 'auth/join/apply',
  PushAuthJoinSuccess = 'auth/join/success',
  PushAuthVerifyResult = 'auth/verify/result',
  PushStorageFile = 'storage/file',
  PushUserContact = 'user/contact',
  PushUserMessage = 'user/message',
}
