export type PostType = {

    id: number,
    message: string,
    likesCount: number
}


export type ContactsType = {

    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string


}

export type Photostype = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType
    photos: Photostype


}


export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: Photostype
}