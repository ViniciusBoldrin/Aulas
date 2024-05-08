export interface Participant {
  id: number
  name: string | null
  homeOffice: boolean | null
  company: string | null
  department: string | null
  shirtSize: string | null
  createdAt: Date
}

export interface GetPaginatedParticipantsRequest {
  limit: number
  page: number
}

export interface PageDetails {
  totalItems: number
  totalPages: number
  currentPage: number
}

export interface GetPaginatedParticipantsResponse {
  participants: Participant[]
  pagesDetails: PageDetails
}
