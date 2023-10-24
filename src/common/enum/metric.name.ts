export enum MetricName {
  Authentication = 'Authentication',
  JobSchedule = 'JobSchedule',
  ApiOCSC = 'ApiOCSC',
  Profile = 'Profile',
}

export enum MetricFunction {
  Token = 'Token',
  StartSyncOSSC = 'StartSyncOSSC',
  SyncOSSC = 'SyncOSSC',
  GetAllSync = 'GetAllSync',
  CleanSyncProfile = 'CleanSyncProfile',
  CleanQueueData = 'CleanQueueData',
  CleanProfileTransaction = 'CleanProfileTransaction',
  CioInfo = 'CioInfo',
  CioUpload = 'CioUpload',
  Register = 'Register',
}
