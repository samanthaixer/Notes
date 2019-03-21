# My approach to the weekend challenges

### README first and last

- I update my README with my thoughts and plans first. That way I am more likely to keep adding to it as I go
- The README is also the last thing I update with all of the latest useful info including how to use my code

### Feature tests almost first (don't forget the README)

- Write feature tests first
  - This can be in IRB or in RSpec, and using webpages
    - RSpec is easier to re-run
    - IRB gives you flexibility to play around and explore scenarios
    - Using the webpage helps you to see what the user would see

### Model the Domain

- I usually start by writing out the nouns and verbs to give me an idea of my classes
- I find sequence diagrams really useful as it helps me visualise dependencies
- Class diagrams help me capture the user interactions

### Always TDD

- TDD is amazing. It really helps me drive out my design in the simplest possible way
- Simplest tests first, simplest way to solve them
- Occassionally this can feel like writing bad tests (e.g. testing state) but these can be taken out when better tests materialise

### Check for single responsibility

- Are any of my classes or methods taking on too much responsibility? Time to extract further
- Running tests before and after any extraction/refactoring means I can see if I've broken something

### Dependency injection

- Check where there are dependencies between classes
- Use dependency injection and doubles/mocks to test classes in isolation
- Don't forget to use feature tests to test the real functionality all the way through too

### Lint and commit

- After each test passes, now is a good time to run a linter and commit/push to GitHub
- I can't confess to doing this for every single test but I am getting better at doing it more frequently
