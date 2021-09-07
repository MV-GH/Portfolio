interface Asset {
    Name: string,
    Type: "Image" | "Video"
}

export default interface Project {
    Title: string,
    From: string,
    Until: string,
    Description: string,
    Tags : string[],
    Source: string,
    View: string,
    Installation: string,
    Assets: Asset[]
}