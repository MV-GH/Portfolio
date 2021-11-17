export interface Asset {
    URL: string,
    Type?: "Image" | "Video" | "YT"
}

export default interface Project {
    Title: string,
    From: string,
    Until: string,
    Description: string,
    Tags : string[],
    Source: string,
    View?: string ,
    Installation?: string,
    Assets: Asset[]
}

export interface ProjectList {
    Projects: Project[]
}