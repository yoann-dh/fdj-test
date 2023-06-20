import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { LeagueModel } from '../../models/league.model';

@Component({
  selector: 'fdj-sports-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnChanges {
  @Input() leagues: LeagueModel[];
  @Output() onSelectLeague: EventEmitter<string[]> = new EventEmitter<string[]>();

  searchQuery: string;
  searchSuggestions: LeagueModel[] = [];
  filteredSuggestions: LeagueModel[] = [];

  ngOnChanges() {
    if (this.leagues) {
      this.searchSuggestions = this.leagues;
    }
  }

  getSearchSuggestions() {
    this.filteredSuggestions = [];
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      this.filteredSuggestions = this.searchSuggestions.filter(suggestion =>
        suggestion.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  selectSuggestion(suggestion) {
    this.searchQuery = suggestion.name;
    this.filteredSuggestions = [];
    this.search(suggestion.teams);
  }

  search(ids: string[]) {
    this.onSelectLeague.emit(ids)
  }
}
