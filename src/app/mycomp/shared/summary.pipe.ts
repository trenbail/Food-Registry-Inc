import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name: 'Summary'
})
export class Summary implements PipeTransform {
    
    transform(value:string, limit:number=10) {
        return value.substring(0,limit) + ' ...read more'
    }
}