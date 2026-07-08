import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

export interface Register{
    fname:string;
    lname:string;
    email:string;
    password:string;
    cpassword:string;
}

export function readregisterdata(): Register[]{
    const filepath=path.resolve(__dirname,'../../../testdata/registerdata.csv');
    const filecontent=fs.readFileSync(filepath,'utf-8');

    return parse(filecontent,{
        columns:true,
        skip_empty_lines:true,
        trim:true
    })as Register[];
}
