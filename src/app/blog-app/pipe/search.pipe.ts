import { Pipe, PipeTransform } from '@angular/core';

interface Contact {
  title: string;
}

@Pipe({
  name: 'selectContact'
})
export class SearchPipe implements PipeTransform {

  transform(contacts: Array<Object>, prefix: string): Array<Object> {
    return contacts.filter((contact:Contact) => contact.title.match(prefix));
  }

}
