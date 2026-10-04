const base = import.meta.env.BASE_URL

export const assets = {
  iconList: `${base}images/icon-list.svg`,
  iconSuccess: `${base}images/icon-success.svg`,
  illustrationDesktop: `${base}images/illustration-sign-up-desktop.svg`,
  illustrationMobile: `${base}images/illustration-sign-up-mobile.svg`,
  illustrationTablet: `${base}images/illustration-sign-up-tablet.svg`,
} as const
