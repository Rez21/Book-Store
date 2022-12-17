import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args: any) {
    console.log(args)
    if(args=='All books'){
      return value
    }else{
      args=args.toLowerCase();
    }
    return value.filter((note:any)=>{
      return note.bookName.toLowerCase().includes(args);
    })
  }

}
