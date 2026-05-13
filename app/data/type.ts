export type resultKeys = 
| 'lazy' 
| 'boom' 
| 'good' 
| 'mouth' 
| 'rush' 
| 'dream' 
| 'hide' 
| 'sad';

export type option = {
    id : string;
    text : string;
    result : resultKeys;
    color : string;
};

export type question = {
    id : string;
    badge : string;
    title : string;
    options : option[];
};

export type resultData = {
    name : string;
    tags : string;
    slogan : string;
    description : string;
    color : string;
    image: string;
    stats : {
        label : string;
        value : number;
        color : string;
    }[];
};

