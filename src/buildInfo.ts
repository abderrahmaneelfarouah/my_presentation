export interface SiteBuildInfo {
  version: string;
  packageVersion: string;
  commit: string;
  branch: string;
  builtAt: string;
}

declare const __SITE_BUILD_INFO__: SiteBuildInfo;

export const siteBuildInfo = __SITE_BUILD_INFO__;
