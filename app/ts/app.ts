import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MutualFundService} from './mutualFundService';
import {CategoryComponent} from './category';
bootstrap(CategoryComponent, [HTTP_PROVIDERS, MutualFundService]);
