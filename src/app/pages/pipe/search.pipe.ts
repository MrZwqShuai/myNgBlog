import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectContact'
})
export class SearchPipe implements PipeTransform {

  transform(contacts: Array<Object>, prefix: String): Array<Object> {
    console.log(contacts, '---');
    return contacts.filter(contact => contact.title.match(prefix));
  }

}
