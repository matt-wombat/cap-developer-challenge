using { golf } from '../db/schema-golf';
using { RemoteService as external } from './external/RemoteService';

service CatalogServiceGolf @(path:'/browse-golf') {
  entity Players as projection on external.Players;
  entity Rounds as projection on golf.Rounds;
  entity Holes as projection on golf.Holes;
  entity Shots as projection on golf.Shots;
}