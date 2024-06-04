export interface PostProps {
    id : string  ;
    title : string ;
    image : string ;
    date : any ;
    content : string ;
    PostTags ?: {tag : {name : string , id : string}} []
}