import { DataTableKeys } from "./interfaces"

export const PAGES_WITH_NO_NAVBAR = ["/404", "/_error", "/logout"]

export const NO_CONTACT_FORM_PAGES = [
  "/admin",
  "/admin/donations",
  "/admin/contacts",
]

export const AUTHENTICATED_ADMIN_PAGES = [
  "/admin",
  "/admin/donations",
  "/admin/contacts",
]

export const FIREBASE_COLLECTIONS_LIST = {
  CONTACTS: "userContactDetails",
  NGOS: "ngos",
}

export const API_END_POINTS = {
  update_contact: "/api/contact",
}

export const CONTACT_LIST_KEYS: DataTableKeys[] = [
  {
    fk: "sno",
    key: "",
    id: 0,
  },
  {
    fk: "name",
    key: "Name",
    id: 1,
  },
  {
    fk: "email",
    key: "Email",
    id: 2,
  },
  {
    fk: "contactNumber",
    key: "Contact Number",
    id: 3,
  },
  {
    fk: "iat",
    key: "Date Entered",
    id: 4,
  },
  {
    fk: "status",
    key: "Status",
    id: 5,
  },
]

export const CONTACT_STATUS_TYPES = [
  "Contacted",
  "Recontact",
  "Invalid",
  "Pending",
]
