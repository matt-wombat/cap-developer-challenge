using { cuid, managed } from '@sap/cds/common';
namespace golf;

entity Rounds : managed {
  key ID : UUID;
  title  : String(111);
  holes : Association to many Holes on holes.round = $self;
}

entity Holes : cuid {
  round : Association to Rounds;
  score : Integer;
  par   : Integer @assert.range:[3,5];
  shots : Association to many Shots on shots.hole = $self;
  result: String;
}

entity Shots : cuid, managed {
  hole : Association to Holes;
  descr : String;
}

