# Relational databases intro - 25/03/2019

1. Rows - records
2. Columns - fields

Relational databases - tables that are related to each other

- Post-gres - management system for databases
- PSQL - shell for interacting with Post-gres
- SQL - language for interacting with databases
- PG - Gem - allow you to create a connection to the Post-gres database from the Ruby programme. Allows you to write SQL in your Ruby code

NOTES ON LANGUAGES
- RSpec is a testing framework for language - RSPec is a domain-specific language that has it's own commands that don't exist elsewhere
- SQL - is a domain specific language - specific to some databases


# Workshop 26/03/2019

## Class-Responsibility-Collaborator cards

Class responsibilities - "knows XX, changes YY"

User story to class - nouns and verbs, look at behaviour.

E.g.

```
As a customer
So I can get a bicycle
I want to withdraw a bicycle from a docking station
```

Look at behaviour - e.g. withdraw - then think about which object would have that responsibility:
**withdraw** from **docking station**

Class Name = DockingStation

Responsibility = release bike (specific to what the docking station would do)

Collaborators = Bike

Class Name = Bike
Responsibility = unknown
Collaborators = unknown - doesn't necessarily know about a docking station

# Database associations
https://guides.rubyonrails.org/association_basics.html#the-types-of-associations

## Side note - interpreting user stories
Don't be afraid to challenge the user stories or ask for more information

```
As a customer
So I can have the best cycling experience
I want to only get good bikes from the docking station
```
=> Challenge what "good" means

=> Think about where the responsibility lies - it is the bike's state for "working" so the bike should definitely know about it. Question - should the docking station be responsible for only releasing good bikes? This would probably need further user stories
