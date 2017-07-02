import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorDesc'
})
export class ShorDescPipe implements PipeTransform {

    transform(data: any, likes: any): any {
        return data.sort(function(a,b){
            return b.likes - a.likes
        })
    }

}
