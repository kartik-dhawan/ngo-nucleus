import { ContactFormData } from "../utils/interfaces"

export type ContentfulVariable = { [key: string]: any }

export type ContentFulENV = "dev" | "master"

export interface ContentStateType {
  content: ContentfulVariable
  env: ContentFulENV
}

export interface AuthStateType {
  loginDialog: boolean
  menuList: boolean
}

export interface ContactStateType {
  contactsList: ContactFormData[]
}

export interface NgoStateType {
  ngoList: any[]
}
